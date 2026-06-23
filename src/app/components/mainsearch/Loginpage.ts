import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type LoginRole = 'organization' | 'agency';
type FormStatus = 'success' | 'error' | '';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: GoogleCredentialResponse) => void;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
          }) => void;
          prompt: () => void;
        };
      };
    };
  }
}

interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
}

interface GoogleUserPayload {
  sub?: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="min-h-screen bg-white font-main text-[#161616]">
      <section class="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        <!-- Left Image / Branding Section -->
        <div class="relative hidden overflow-hidden lg:block">
          <img
            src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Login workspace"
            class="h-full w-full object-cover grayscale"
          />

          <div class="absolute inset-0 bg-black/30"></div>

          <div class="absolute bottom-10 left-10 max-w-md text-white">
            <p class="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              Altus Career
            </p>

            <h1 class="text-4xl font-semibold leading-tight tracking-[-0.04em]">
              Welcome back to your career pathway workspace
            </h1>

            <p class="mt-4 text-sm leading-relaxed text-white/80">
              Access your dashboard, applications, counselling workflows, partner tools and operational insights from one secure login.
            </p>
          </div>
        </div>

        <!-- Right Login Section -->
        <div class="flex items-center justify-center px-6 py-10">
          <div class="w-full max-w-[430px]">

            <!-- Title -->
            <div class="mb-8 text-center">
              <h2 class="text-[28px] font-semibold tracking-[-0.03em] text-[#161616]">
                Log in to your account
              </h2>

              <p class="mt-2 text-sm text-[#6f6f6f]">
                Enter your credentials to continue
              </p>
            </div>

            <!-- Login Type Tabs -->
            <div class="mb-6 grid grid-cols-2 gap-1 rounded-lg bg-[#f4f4f4] p-1">
              <button
                type="button"
                class="h-10 rounded-md text-sm font-medium transition-all"
                [ngClass]="activeRole() === 'organization'
                  ? 'bg-white text-[#161616] shadow-sm'
                  : 'text-[#6f6f6f] hover:text-[#161616]'"
                (click)="setRole('organization')"
              >
                Organization
              </button>

              <button
                type="button"
                class="h-10 rounded-md text-sm font-medium transition-all"
                [ngClass]="activeRole() === 'agency'
                  ? 'bg-white text-[#161616] shadow-sm'
                  : 'text-[#6f6f6f] hover:text-[#161616]'"
                (click)="setRole('agency')"
              >
                Agency / Consultancy
              </button>
            </div>

            <!-- Social Login Buttons -->
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                class="flex h-11 items-center justify-center gap-2 rounded-md border border-[#d0d0d0] bg-white text-sm font-medium text-[#393939] hover:bg-[#f4f4f4] disabled:cursor-not-allowed disabled:opacity-60"
                [disabled]="isSubmitting()"
                (click)="loginWithGoogle()"
              >
                <span class="text-base font-semibold text-[#4285F4]">G</span>
                Google
              </button>

              <button
                type="button"
                class="flex h-11 items-center justify-center gap-2 rounded-md border border-[#d0d0d0] bg-white text-sm font-medium text-[#393939] hover:bg-[#f4f4f4] disabled:cursor-not-allowed disabled:opacity-60"
                [disabled]="isSubmitting()"
                (click)="loginWithMicrosoft()"
              >
                <span class="grid h-4 w-4 grid-cols-2 gap-[2px]">
                  <span class="bg-[#f25022]"></span>
                  <span class="bg-[#7fba00]"></span>
                  <span class="bg-[#00a4ef]"></span>
                  <span class="bg-[#ffb900]"></span>
                </span>
                Microsoft
              </button>
            </div>

            <!-- Divider -->
            <div class="my-6 flex items-center gap-3">
              <div class="h-px flex-1 bg-[#e0e0e0]"></div>
              <span class="text-xs text-[#8d8d8d]">
                or continue with email
              </span>
              <div class="h-px flex-1 bg-[#e0e0e0]"></div>
            </div>

            <!-- Login Form -->
            <form class="space-y-4" (submit)="submitLogin($event)">

              <!-- Email -->
              <div>
                <label class="mb-1 block text-sm font-medium text-[#393939]">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="name@company.com"
                  class="h-11 w-full rounded-md border px-3 text-sm outline-none transition-all placeholder:text-[#a8a8a8]"
                  [ngClass]="emailError()
                    ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                    : 'border-[#d0d0d0] focus:border-[#0f62fe] focus:ring-2 focus:ring-[#d0e2ff]'"
                  [value]="email()"
                  (input)="email.set($any($event.target).value); touchedEmail.set(true)"
                />

                @if (emailError()) {
                  <p class="mt-1 text-xs text-red-600">
                    {{ emailError() }}
                  </p>
                }
              </div>

              <!-- Password -->
              <div>
                <div class="mb-1 flex items-center justify-between">
                  <label class="block text-sm font-medium text-[#393939]">
                    Password
                  </label>

                  <button
                    type="button"
                    class="text-xs font-medium text-[#0f62fe] hover:text-[#0043ce]"
                    (click)="forgotPassword()"
                  >
                    Forgot password?
                  </button>
                </div>

                <div class="relative">
                  <input
                    [type]="showPassword() ? 'text' : 'password'"
                    placeholder="Enter your password"
                    class="h-11 w-full rounded-md border px-3 pr-12 text-sm outline-none transition-all placeholder:text-[#a8a8a8]"
                    [ngClass]="passwordError()
                      ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                      : 'border-[#d0d0d0] focus:border-[#0f62fe] focus:ring-2 focus:ring-[#d0e2ff]'"
                    [value]="password()"
                    (input)="password.set($any($event.target).value); touchedPassword.set(true)"
                  />

                  <button
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#6f6f6f] hover:text-[#161616]"
                    (click)="togglePassword()"
                  >
                    {{ showPassword() ? 'Hide' : 'Show' }}
                  </button>
                </div>

                @if (passwordError()) {
                  <p class="mt-1 text-xs text-red-600">
                    {{ passwordError() }}
                  </p>
                }
              </div>

              <!-- Remember Me -->
              <div class="flex items-center justify-between">
                <label class="flex cursor-pointer items-center gap-2 text-sm text-[#525252]">
                  <input
                    type="checkbox"
                    class="h-4 w-4 rounded border-[#c6c6c6] text-[#0f62fe] focus:ring-[#0f62fe]"
                    [checked]="rememberMe()"
                    (change)="rememberMe.set($any($event.target).checked)"
                  />

                  Remember me
                </label>

                <span class="text-xs text-[#8d8d8d]">
                  {{ activeRoleLabel() }}
                </span>
              </div>

              <!-- Form Message -->
              @if (formMessage()) {
                <div
                  class="rounded-md px-4 py-3 text-sm"
                  [ngClass]="formStatus() === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'"
                >
                  {{ formMessage() }}
                </div>
              }

              <!-- Submit Button -->
              <button
                type="submit"
                class="flex h-11 w-full items-center justify-center rounded-md text-sm font-semibold text-white transition-all"
                [disabled]="isSubmitting() || !isFormValid()"
                [ngClass]="isFormValid()
                  ? 'bg-[#0f62fe] hover:bg-[#0043ce]'
                  : 'cursor-not-allowed bg-[#c6c6c6]'"
              >
                @if (isSubmitting()) {
                  <span class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
                  Logging in...
                } @else {
                  Log in
                }
              </button>

              <!-- Register Link -->
              <p class="text-center text-sm text-[#6f6f6f]">
                Don’t have an account?
                <button
                  type="button"
                  class="font-medium text-[#0f62fe] hover:text-[#0043ce]"
                  (click)="goToRegister()"
                >
                  Create account
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .font-main {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }
  `]
})
export class LoginComponent {
  activeRole = signal<LoginRole>('organization');

  email = signal('');
  password = signal('');
  rememberMe = signal(false);
  showPassword = signal(false);

  touchedEmail = signal(false);
  touchedPassword = signal(false);

  isSubmitting = signal(false);
  formMessage = signal('');
  formStatus = signal<FormStatus>('');

  redirectUrl = 'https://fragrant-altus-career-path.base44.app/';

  /*
    Add your real Google OAuth Client ID here.

    For quick demo without Google setup:
    Google button will show error until client ID is added.
  */
  googleClientId = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

  activeRoleLabel = computed(() => {
    return this.activeRole() === 'organization'
      ? 'Organization Login'
      : 'Agency Login';
  });

  emailError = computed(() => {
    const value = this.email().trim();

    if (!this.touchedEmail()) return '';
    if (!value) return 'Email address is required.';
    if (!this.isValidEmail(value)) return 'Enter a valid email address.';

    return '';
  });

  passwordError = computed(() => {
    const value = this.password();

    if (!this.touchedPassword()) return '';
    if (!value) return 'Password is required.';
    if (value.length < 6) return 'Password must be at least 6 characters.';

    return '';
  });

  isFormValid = computed(() => {
    return this.isValidEmail(this.email().trim()) && this.password().length >= 6;
  });

  setRole(role: LoginRole) {
    this.activeRole.set(role);
    this.clearMessage();
  }

  togglePassword() {
    this.showPassword.update(value => !value);
  }

  submitLogin(event: Event) {
    event.preventDefault();

    this.touchedEmail.set(true);
    this.touchedPassword.set(true);
    this.clearMessage();

    if (!this.isFormValid()) {
      this.setError('Please fix the highlighted fields before continuing.');
      return;
    }

    this.isSubmitting.set(true);

    const demoSession = {
      authType: 'email-demo',
      role: this.activeRole(),
      email: this.email().trim(),
      rememberMe: this.rememberMe(),
      loginAt: new Date().toISOString()
    };

    localStorage.setItem('altusUserSession', JSON.stringify(demoSession));

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.setSuccess('Login successful. Redirecting...');
      this.redirectAfterLogin();
    }, 700);
  }

  loginWithGoogle() {
    this.clearMessage();

    if (!this.googleClientId || this.googleClientId.includes('YOUR_GOOGLE_CLIENT_ID')) {
      /*
        Frontend-only fallback for prototype:
        This simulates Google login so your flow works without backend or Firebase.
        Replace googleClientId later when you want real Google popup.
      */
      this.simulateGoogleLogin();
      return;
    }

    this.isSubmitting.set(true);

    this.waitForGoogleIdentity()
      .then(() => {
        window.google?.accounts.id.initialize({
          client_id: this.googleClientId,
          callback: (response: GoogleCredentialResponse) => {
            this.handleGoogleCredential(response);
          },
          auto_select: false,
          cancel_on_tap_outside: true
        });

        window.google?.accounts.id.prompt();
      })
      .catch(() => {
        this.isSubmitting.set(false);
        this.setError('Google script is not loaded. Add the Google script in index.html.');
      });
  }

  loginWithMicrosoft() {
    this.setError('Microsoft login is not connected in frontend-only mode.');
  }

  forgotPassword() {
    const value = this.email().trim();

    this.touchedEmail.set(true);
    this.clearMessage();

    if (!this.isValidEmail(value)) {
      this.setError('Enter your email address first, then click forgot password.');
      return;
    }

    this.setSuccess('Password reset is demo-only now. Backend email service can be connected later.');
  }

  goToRegister() {
    window.location.href = '/registration';
  }

  private simulateGoogleLogin() {
    this.isSubmitting.set(true);

    const demoGoogleSession = {
      authType: 'google-demo',
      role: this.activeRole(),
      googleId: 'demo-google-user',
      email: 'demo.google.user@gmail.com',
      emailVerified: true,
      name: 'Demo Google User',
      picture: '',
      provider: 'google-demo',
      loginAt: new Date().toISOString()
    };

    localStorage.setItem('altusUserSession', JSON.stringify(demoGoogleSession));

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.setSuccess('Google demo login successful. Redirecting...');
      this.redirectAfterLogin();
    }, 700);
  }

  private handleGoogleCredential(response: GoogleCredentialResponse) {
    try {
      if (!response.credential) {
        this.isSubmitting.set(false);
        this.setError('Google login failed. No credential returned.');
        return;
      }

      const googleUser = this.decodeJwt(response.credential);

      const googleSession = {
        authType: 'google',
        role: this.activeRole(),
        googleId: googleUser.sub,
        email: googleUser.email,
        emailVerified: googleUser.email_verified,
        name: googleUser.name,
        picture: googleUser.picture,
        provider: 'google',
        loginAt: new Date().toISOString(),
        idToken: response.credential
      };

      localStorage.setItem('altusUserSession', JSON.stringify(googleSession));

      this.isSubmitting.set(false);
      this.setSuccess('Google login successful. Redirecting...');
      this.redirectAfterLogin();
    } catch {
      this.isSubmitting.set(false);
      this.setError('Unable to process Google login response.');
    }
  }

  private waitForGoogleIdentity(): Promise<void> {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 30;

      const timer = window.setInterval(() => {
        attempts++;

        if (window.google?.accounts?.id) {
          window.clearInterval(timer);
          resolve();
          return;
        }

        if (attempts >= maxAttempts) {
          window.clearInterval(timer);
          reject();
        }
      }, 100);
    });
  }

  private decodeJwt(token: string): GoogleUserPayload {
    const payload = token.split('.')[1];

    const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');

    const decodedPayload = decodeURIComponent(
      window
        .atob(normalizedPayload)
        .split('')
        .map(char => {
          return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(decodedPayload) as GoogleUserPayload;
  }

  private redirectAfterLogin() {
    setTimeout(() => {
      window.location.href = this.redirectUrl;
    }, 500);
  }

  private setSuccess(message: string) {
    this.formStatus.set('success');
    this.formMessage.set(message);
  }

  private setError(message: string) {
    this.formStatus.set('error');
    this.formMessage.set(message);
  }

  private clearMessage() {
    this.formMessage.set('');
    this.formStatus.set('');
  }

  private isValidEmail(value: string): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
  }
}