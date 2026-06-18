import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ToolCard {
  key: 'calculator' | 'resume' | 'advisor' | 'interview';
  title: string;
  description: string;
  tags: string[];
  label: string;
  cardClass: string;
  tagClass: string;
}

interface CareerPathNode {
  title: string;
  subtitle: string;
  routeType: 'common' | 'somewhat' | 'less';
}

interface CareerPathwayMap {
  startRole: string;
  primaryRole: CareerPathNode;
  middleRoles: CareerPathNode[];
  seniorRoles: CareerPathNode[];
}

@Component({
  selector: 'app-tools-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="font-main bg-white text-[#161616]">

      <div class="border-y border-[#e0e0e0] bg-white">
        <div class="mx-auto grid max-w-[1584px] grid-cols-1 gap-8 px-6 py-14 lg:grid-cols-12 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">
          <div class="lg:col-span-7">
            <p class="section-eyebrow">Career360 Tools</p>

            <h2 class="mt-5 max-w-[880px] text-[40px] font-normal leading-[1.05] tracking-[-0.055em] md:text-[52px] lg:text-[64px]">
              Tools to calculate, prepare and choose the right career pathway
            </h2>
          </div>

          <div class="flex flex-col justify-end lg:col-span-5">
            <p class="max-w-[620px] text-[16px] leading-[1.75] text-[#525252] lg:text-[18px]">
              Use practical decision tools to calculate cost, build career documents,
              find study or work pathways and prepare for interviews.
            </p>
          </div>
        </div>
      </div>

      <div class="border-b border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-10 lg:px-12 lg:py-14 xl:px-16 2xl:px-20">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            @for (tool of tools; track tool.title) {
              <article
                class="tool-card group"
                [ngClass]="tool.cardClass"
                (click)="openTool(tool)"
              >
                <div>
                  <p class="section-eyebrow">{{ tool.label }}</p>

                  <h3 class="mt-4 text-[30px] font-normal leading-tight tracking-[-0.05em] text-[#161616]">
                    {{ tool.title }}
                  </h3>

                  <p class="mt-4 text-[14px] leading-relaxed text-[#393939]">
                    {{ tool.description }}
                  </p>
                </div>

                <div class="mt-8">
                  <div class="flex flex-wrap gap-2">
                    @for (tag of tool.tags; track tag) {
                      <span class="tool-tag" [ngClass]="tool.tagClass">
                        {{ tag }}
                      </span>
                    }
                  </div>

                  <div class="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                    <span class="text-[14px] font-semibold text-[#0f62fe]">
                      Open tool
                    </span>

                    <span class="text-[24px] font-light leading-none text-[#0f62fe] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            }

          </div>
        </div>
      </div>

      @if (activeTool) {
        <div class="fixed inset-0 z-[999] flex items-center justify-center px-4 py-6">

          <div
            class="absolute inset-0 bg-[#161616]/70"
            (click)="closeTool()"
          ></div>

          <div class="relative z-10 w-full max-w-[1180px] max-h-[90vh] overflow-hidden border border-[#c6c6c6] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]">

            <div class="flex items-start justify-between gap-4 border-b border-[#e0e0e0] bg-white px-5 py-5 lg:px-7">
              <div>
                <p class="section-eyebrow">Interactive tool</p>

                <h3 class="mt-2 text-[28px] font-normal leading-tight tracking-[-0.045em] text-[#161616] lg:text-[38px]">
                  {{ activeTool.title }}
                </h3>
              </div>

              <button
                type="button"
                class="close-btn"
                (click)="closeTool()"
              >
                ✕
              </button>
            </div>

            <div class="max-h-[calc(90vh-116px)] overflow-y-auto bg-[#f4f4f4] p-5 lg:p-7">

              @if (activeTool.key === 'calculator') {
                <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
                  <div class="panel-card lg:col-span-5">
                    <h4 class="panel-title">Cost & ROI Calculator</h4>

                    <div class="mt-5 space-y-4">
                      <label class="tool-label">
                        Tuition / Training Cost
                        <input type="number" [(ngModel)]="calculator.tuition" class="tool-input" />
                      </label>

                      <label class="tool-label">
                        Living Cost Per Month
                        <input type="number" [(ngModel)]="calculator.monthlyLiving" class="tool-input" />
                      </label>

                      <label class="tool-label">
                        Duration in Months
                        <input type="number" [(ngModel)]="calculator.months" class="tool-input" />
                      </label>

                      <label class="tool-label">
                        Expected Monthly Salary After Placement
                        <input type="number" [(ngModel)]="calculator.monthlySalary" class="tool-input" />
                      </label>

                      <button type="button" class="primary-btn" (click)="calculateROI()">
                        Calculate
                      </button>
                    </div>
                  </div>

                  <div class="panel-card lg:col-span-7">
                    <h4 class="panel-title">Result Summary</h4>

                    <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div class="metric-card">
                        <p>Total Investment</p>
                        <h5>₹{{ calculatorResult.totalInvestment | number }}</h5>
                      </div>

                      <div class="metric-card">
                        <p>Annual Salary</p>
                        <h5>₹{{ calculatorResult.annualSalary | number }}</h5>
                      </div>

                      <div class="metric-card">
                        <p>Payback Period</p>
                        <h5>{{ calculatorResult.paybackMonths }} Months</h5>
                      </div>
                    </div>

                    <div class="mt-5 border border-[#e0e0e0] bg-[#edf5ff] p-5">
                      <p class="text-[14px] leading-relaxed text-[#525252]">
                        {{ calculatorResult.message }}
                      </p>
                    </div>
                  </div>
                </div>
              }

              @if (activeTool.key === 'resume') {
                <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
                  <div class="panel-card lg:col-span-5">
                    <h4 class="panel-title">Resume Builder</h4>

                    <div class="mt-5 space-y-4">
                      <label class="tool-label">
                        Full Name
                        <input type="text" [(ngModel)]="resume.name" class="tool-input" />
                      </label>

                      <label class="tool-label">
                        Target Role
                        <input type="text" [(ngModel)]="resume.role" class="tool-input" />
                      </label>

                      <label class="tool-label">
                        Education
                        <input type="text" [(ngModel)]="resume.education" class="tool-input" />
                      </label>

                      <label class="tool-label">
                        Key Skills
                        <textarea [(ngModel)]="resume.skills" class="tool-textarea"></textarea>
                      </label>

                      <label class="tool-label">
                        Experience / Projects
                        <textarea [(ngModel)]="resume.experience" class="tool-textarea"></textarea>
                      </label>

                      <button type="button" class="primary-btn" (click)="generateResume()">
                        Generate Resume
                      </button>
                    </div>
                  </div>

                  <div class="panel-card lg:col-span-7">
                    <div class="flex items-center justify-between gap-4">
                      <h4 class="panel-title">Generated Resume Draft</h4>

                      <button type="button" class="secondary-btn" (click)="copyText(resumeOutput)">
                        Copy
                      </button>
                    </div>

                    <pre class="output-box">{{ resumeOutput }}</pre>
                  </div>
                </div>
              }

              @if (activeTool.key === 'advisor') {
                <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
                  <div class="panel-card lg:col-span-4">
                    <h4 class="panel-title">AI Career Advisor</h4>

                    <div class="mt-5 space-y-4">
                      <label class="tool-label">
                        Current Qualification
                        <select [(ngModel)]="advisor.qualification" class="tool-input">
                          <option value="10th">10th Standard</option>
                          <option value="12th">12th Standard</option>
                          <option value="Diploma">Diploma</option>
                          <option value="UG">Undergraduate</option>
                          <option value="PG">Postgraduate</option>
                        </select>
                      </label>

                      <label class="tool-label">
                        Preferred Field
                        <select [(ngModel)]="advisor.field" class="tool-input">
                          <option value="Healthcare">Healthcare</option>
                          <option value="IT">IT</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Business">Business</option>
                        </select>
                      </label>

                      <label class="tool-label">
                        Preferred Destination
                        <select [(ngModel)]="advisor.destination" class="tool-input">
                          <option value="Germany">Germany</option>
                          <option value="Europe">Europe</option>
                          <option value="Gulf">Gulf</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </label>

                      <label class="tool-label">
                        German Language Level
                        <select [(ngModel)]="advisor.language" class="tool-input">
                          <option value="None">None</option>
                          <option value="A1">A1</option>
                          <option value="A2">A2</option>
                          <option value="B1">B1</option>
                          <option value="B2">B2</option>
                        </select>
                      </label>

                      <button type="button" class="primary-btn" (click)="generateCareerAdvice()">
                        Generate Pathway Map
                      </button>
                    </div>
                  </div>

                  <div class="panel-card overflow-hidden lg:col-span-8">
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 class="panel-title">Recommended Career Pathway Map</h4>

                        <p class="mt-2 text-[13px] leading-relaxed text-[#525252]">
                          Mapped from {{ advisor.qualification }} → {{ advisor.field }} → {{ advisor.destination }}
                        </p>
                      </div>

                      <button type="button" class="secondary-btn shrink-0" (click)="generateCareerAdvice()">
                        Refresh
                      </button>
                    </div>

                    <div class="career-map-scroll mt-5">
                      <div class="career-map-shell">

                        <div class="career-start">
                          <div class="career-start-dot"></div>
                          <p>{{ advisorPathway.startRole }}</p>
                        </div>

                        <div class="career-line career-line-main"></div>
                        <div class="career-line career-line-mid"></div>
                        <div class="career-line career-line-bottom"></div>
                        <div class="career-line career-line-top"></div>
                        <div class="career-line career-line-senior-mid"></div>
                        <div class="career-line career-line-senior-bottom"></div>

                        <button
                          type="button"
                          class="career-node career-primary-node"
                          [ngClass]="[
                            advisorPathway.primaryRole.routeType === 'common' ? 'route-common' : '',
                            advisorPathway.primaryRole.routeType === 'somewhat' ? 'route-somewhat' : '',
                            advisorPathway.primaryRole.routeType === 'less' ? 'route-less' : ''
                          ]"
                        >
                          <span>{{ advisorPathway.primaryRole.title }}</span>
                          <small>{{ advisorPathway.primaryRole.subtitle }}</small>
                          <b>→</b>
                        </button>

                        @for (node of advisorPathway.middleRoles; track node.title) {
                          <button
                            type="button"
                            class="career-node"
                            [ngClass]="[
                              $index === 0 ? 'career-mid-top' : '',
                              $index === 1 ? 'career-mid-bottom' : '',
                              node.routeType === 'common' ? 'route-common' : '',
                              node.routeType === 'somewhat' ? 'route-somewhat' : '',
                              node.routeType === 'less' ? 'route-less' : ''
                            ]"
                          >
                            <span>{{ node.title }}</span>
                            <small>{{ node.subtitle }}</small>
                            <b>→</b>
                          </button>
                        }

                        @for (node of advisorPathway.seniorRoles; track node.title) {
                          <button
                            type="button"
                            class="career-node"
                            [ngClass]="[
                              $index === 0 ? 'career-senior-top' : '',
                              $index === 1 ? 'career-senior-mid' : '',
                              $index === 2 ? 'career-senior-bottom' : '',
                              node.routeType === 'common' ? 'route-common' : '',
                              node.routeType === 'somewhat' ? 'route-somewhat' : '',
                              node.routeType === 'less' ? 'route-less' : ''
                            ]"
                          >
                            <span>{{ node.title }}</span>
                            <small>{{ node.subtitle }}</small>
                          </button>
                        }

                      </div>
                    </div>

                    <div class="career-legend">
                      <div>
                        <span class="legend-box common"></span>
                        More common (&gt; 20%)
                      </div>

                      <div>
                        <span class="legend-box somewhat"></span>
                        Somewhat common (8 - 20%)
                      </div>

                      <div>
                        <span class="legend-line less"></span>
                        Less common (&lt; 8%)
                      </div>
                    </div>
                  </div>
                </div>
              }

              @if (activeTool.key === 'interview') {
                <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
                  <div class="panel-card lg:col-span-5">
                    <h4 class="panel-title">Interview Preparation</h4>

                    <div class="mt-5 space-y-4">
                      <label class="tool-label">
                        Role / Program
                        <input type="text" [(ngModel)]="interview.role" class="tool-input" />
                      </label>

                      <label class="tool-label">
                        Interview Type
                        <select [(ngModel)]="interview.type" class="tool-input">
                          <option value="Ausbildung">Ausbildung</option>
                          <option value="University Admission">University Admission</option>
                          <option value="Job Interview">Job Interview</option>
                          <option value="Visa Interview">Visa Interview</option>
                        </select>
                      </label>

                      <label class="tool-label">
                        Experience Level
                        <select [(ngModel)]="interview.level" class="tool-input">
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Experienced">Experienced</option>
                        </select>
                      </label>

                      <button type="button" class="primary-btn" (click)="generateInterviewPrep()">
                        Generate Questions
                      </button>
                    </div>
                  </div>

                  <div class="panel-card lg:col-span-7">
                    <h4 class="panel-title">Mock Interview Questions</h4>

                    <div class="mt-5 space-y-3">
                      @for (question of interviewQuestions; track question) {
                        <div class="question-card">
                          <p>{{ question }}</p>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      }

    </section>
  `,
  styles: [`
    .font-main {
      font-family: 'IBM Plex Sans', 'Inter', Arial, Helvetica, sans-serif;
    }

    .section-eyebrow {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: #0f62fe;
    }

    .tool-card {
      min-height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #c6c6c6;
      padding: 28px;
      cursor: pointer;
      transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
    }

    .tool-card:hover {
      border-color: #0f62fe;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.10);
      transform: translateY(-2px);
    }

    .card-blue { background: #edf5ff; }
    .card-orange { background: #fff2e8; }
    .card-purple { background: #f6f2ff; }
    .card-green { background: #defbe6; }

    .tool-tag {
      display: inline-flex;
      align-items: center;
      padding: 7px 11px;
      font-size: 11px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .tag-blue { background: #d0e2ff; color: #0043ce; }
    .tag-orange { background: #ffd9be; color: #8a3800; }
    .tag-purple { background: #e8daff; color: #6929c4; }
    .tag-green { background: #a7f0ba; color: #0e6027; }

    .close-btn {
      display: flex;
      height: 40px;
      width: 40px;
      align-items: center;
      justify-content: center;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      color: #161616;
      font-size: 15px;
      transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
    }

    .close-btn:hover {
      border-color: #0f62fe;
      background: #0f62fe;
      color: #ffffff;
    }

    .panel-card {
      border: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 24px;
    }

    .panel-title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.04em;
      color: #161616;
    }

    .tool-label {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 12px;
      font-weight: 600;
      color: #393939;
    }

    .tool-input {
      width: 100%;
      height: 44px;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 0 13px;
      font-size: 14px;
      color: #161616;
      outline: none;
    }

    .tool-input:focus {
      border-color: #0f62fe;
      box-shadow: inset 0 0 0 1px #0f62fe;
    }

    .tool-textarea {
      width: 100%;
      min-height: 92px;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 13px;
      font-size: 14px;
      color: #161616;
      outline: none;
      resize: vertical;
    }

    .tool-textarea:focus {
      border-color: #0f62fe;
      box-shadow: inset 0 0 0 1px #0f62fe;
    }

    .primary-btn {
      width: 100%;
      height: 46px;
      background: #0f62fe;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      transition: background 0.18s ease;
    }

    .primary-btn:hover {
      background: #0043ce;
    }

    .secondary-btn {
      height: 38px;
      border: 1px solid #0f62fe;
      background: #ffffff;
      padding: 0 16px;
      color: #0f62fe;
      font-size: 13px;
      font-weight: 600;
      transition: background 0.18s ease, color 0.18s ease;
    }

    .secondary-btn:hover {
      background: #0f62fe;
      color: #ffffff;
    }

    .metric-card {
      border: 1px solid #e0e0e0;
      background: #f4f4f4;
      padding: 18px;
    }

    .metric-card p {
      margin-bottom: 12px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #6f6f6f;
    }

    .metric-card h5 {
      font-size: 23px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -0.04em;
      color: #161616;
    }

    .output-box {
      margin-top: 18px;
      min-height: 360px;
      max-height: 520px;
      overflow-y: auto;
      border: 1px solid #e0e0e0;
      background: #f4f4f4;
      padding: 18px;
      white-space: pre-wrap;
      font-family: 'IBM Plex Sans', 'Inter', Arial, Helvetica, sans-serif;
      font-size: 14px;
      line-height: 1.7;
      color: #393939;
    }

    .question-card {
      border: 1px solid #e0e0e0;
      background: #f4f4f4;
      padding: 16px;
    }

    .question-card p {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.65;
      color: #393939;
    }

    .career-map-scroll {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: 8px;
    }

    .career-map-shell {
      position: relative;
      width: 760px;
      min-width: 760px;
      height: 360px;
      border: 1px solid #e0e0e0;
      background: linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%);
      overflow: hidden;
    }

    .career-start {
      position: absolute;
      left: 28px;
      top: 156px;
      width: 150px;
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 8;
    }

    .career-start-dot {
      width: 36px;
      height: 36px;
      border: 8px solid #0f62fe;
      background: #ffffff;
      flex-shrink: 0;
    }

    .career-start p {
      max-width: 95px;
      font-size: 12px;
      font-weight: 700;
      line-height: 1.15;
      color: #393939;
    }

    .career-line {
      position: absolute;
      height: 5px;
      transform-origin: left center;
      z-index: 1;
    }

    .career-line-main {
      left: 65px;
      top: 172px;
      width: 182px;
      background: #0f62fe;
      transform: rotate(-43deg);
    }

    .career-line-mid {
      left: 65px;
      top: 174px;
      width: 190px;
      background: #4589ff;
      transform: rotate(0deg);
    }

    .career-line-bottom {
      left: 65px;
      top: 176px;
      width: 182px;
      background: #4589ff;
      transform: rotate(43deg);
    }

    .career-line-top {
      left: 390px;
      top: 166px;
      width: 138px;
      background: #0f62fe;
      transform: rotate(-42deg);
    }

    .career-line-senior-mid {
      left: 390px;
      top: 166px;
      width: 148px;
      background: #4589ff;
      transform: rotate(0deg);
    }

    .career-line-senior-bottom {
      left: 390px;
      top: 166px;
      width: 138px;
      background: #4589ff;
      transform: rotate(42deg);
    }

    .career-node {
      position: absolute;
      width: 178px;
      min-height: 64px;
      border: 1px solid #0f62fe;
      background: #ffffff;
      color: #0f62fe;
      padding: 11px 34px 11px 18px;
      text-align: center;
      z-index: 6;
      box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
    }

    .career-node span {
      display: block;
      font-size: 12px;
      font-weight: 700;
      line-height: 1.12;
    }

    .career-node small {
      display: block;
      margin-top: 5px;
      font-size: 10px;
      font-weight: 600;
      line-height: 1.1;
      color: #6f6f6f;
    }

    .career-node b {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: #393939;
      font-size: 17px;
    }

    .career-primary-node { left: 238px; top: 134px; }
    .career-mid-top { left: 238px; top: 68px; }
    .career-mid-bottom { left: 238px; top: 242px; }
    .career-senior-top { left: 560px; top: 38px; }
    .career-senior-mid { left: 560px; top: 134px; }
    .career-senior-bottom { left: 560px; top: 230px; }

    .route-common { border-color: #0f62fe; }
    .route-somewhat { border-color: #4589ff; }
    .route-less { border-color: #78a9ff; }

    .career-legend {
      margin-top: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      border: 1px solid #e0e0e0;
      background: #ffffff;
      padding: 12px 14px;
      font-size: 11px;
      font-weight: 600;
      color: #525252;
    }

    .career-legend div {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .legend-box {
      display: inline-block;
      width: 14px;
      height: 14px;
    }

    .legend-box.common { background: #0f62fe; }
    .legend-box.somewhat { background: #4589ff; }

    .legend-line.less {
      display: inline-block;
      width: 18px;
      height: 4px;
      background: #78a9ff;
    }

    @media (max-width: 1024px) {
      .career-map-shell {
        width: 720px;
        min-width: 720px;
      }

      .career-senior-top,
      .career-senior-mid,
      .career-senior-bottom {
        left: 525px;
      }
    }

    @media (max-width: 640px) {
      .tool-card {
        min-height: 300px;
        padding: 22px;
      }

      .career-map-scroll {
        overflow-x: visible;
        padding-bottom: 0;
      }

      .career-map-shell {
        width: 100%;
        min-width: 0;
        height: auto;
        padding: 22px;
        overflow: visible;
      }

      .career-line {
        display: none;
      }

      .career-start,
      .career-node,
      .career-primary-node,
      .career-mid-top,
      .career-mid-bottom,
      .career-senior-top,
      .career-senior-mid,
      .career-senior-bottom {
        position: relative;
        left: auto;
        top: auto;
        width: 100%;
      }

      .career-start {
        margin-bottom: 14px;
      }

      .career-node {
        min-height: auto;
        margin-bottom: 12px;
        padding: 14px 42px 14px 16px;
      }

      .career-start::after,
      .career-node::after {
        content: '';
        display: block;
        width: 4px;
        height: 18px;
        margin: 12px auto 0;
        background: #4589ff;
      }

      .career-senior-bottom::after {
        display: none;
      }

      .career-legend {
        gap: 10px;
        font-size: 10px;
      }
    }
  `]
})
export class ToolsSectionComponent {
  activeTool: ToolCard | null = null;

  tools: ToolCard[] = [
    {
      key: 'calculator',
      title: 'Calculators',
      description: 'Estimate your ROI, blocked account requirements, and cost of living accurately.',
      tags: ['Salary', 'ROI', 'Blocked Account'],
      label: 'Cost Tool',
      cardClass: 'card-blue',
      tagClass: 'tag-blue'
    },
    {
      key: 'resume',
      title: 'Resume Builder',
      description: 'Create ATS-friendly European standard CVs and cover letters for career applications.',
      tags: ['ATS Friendly', 'Templates', 'Cover Letter'],
      label: 'Career Document',
      cardClass: 'card-orange',
      tagClass: 'tag-orange'
    },
    {
      key: 'advisor',
      title: 'AI Career Advisor',
      description: 'Build study, work or Ausbildung pathways based on qualification, field and destination.',
      tags: ['Pathway Match', 'University', 'Eligibility'],
      label: 'Decision Tool',
      cardClass: 'card-purple',
      tagClass: 'tag-purple'
    },
    {
      key: 'interview',
      title: 'Interview Prep',
      description: 'Generate interview questions for Ausbildung, university, job and visa preparation.',
      tags: ['Mock Interviews', 'Questions', 'Tips'],
      label: 'Preparation Tool',
      cardClass: 'card-green',
      tagClass: 'tag-green'
    }
  ];

  calculator = {
    tuition: 100000,
    monthlyLiving: 75000,
    months: 12,
    monthlySalary: 180000
  };

  calculatorResult = {
    totalInvestment: 0,
    annualSalary: 0,
    paybackMonths: 0,
    message: 'Enter your cost and salary assumptions, then calculate your estimated ROI.'
  };

  resume = {
    name: '',
    role: '',
    education: '',
    skills: '',
    experience: ''
  };

  resumeOutput = 'Fill the form and click Generate Resume to create a structured draft.';

  advisor = {
    qualification: '12th',
    field: 'Healthcare',
    destination: 'Germany',
    language: 'None'
  };

  advisorPathway: CareerPathwayMap = {
    startRole: 'Student / Candidate',
    primaryRole: {
      title: 'Career Pathway',
      subtitle: 'Generate your pathway',
      routeType: 'common'
    },
    middleRoles: [
      {
        title: 'Study Route',
        subtitle: 'University / College',
        routeType: 'somewhat'
      },
      {
        title: 'Work Route',
        subtitle: 'Job / Training',
        routeType: 'less'
      }
    ],
    seniorRoles: [
      {
        title: 'Long-Term Career',
        subtitle: 'Global mobility outcome',
        routeType: 'common'
      },
      {
        title: 'Specialist Pathway',
        subtitle: 'Skill-based progression',
        routeType: 'somewhat'
      },
      {
        title: 'Leadership Route',
        subtitle: 'Management outcome',
        routeType: 'less'
      }
    ]
  };

  interview = {
    role: '',
    type: 'Ausbildung',
    level: 'Beginner'
  };

  interviewQuestions = [
    'Enter your role or program and click Generate Questions to create mock interview questions.'
  ];

  openTool(tool: ToolCard): void {
    this.activeTool = tool;

    if (tool.key === 'calculator') {
      this.calculateROI();
    }

    if (tool.key === 'advisor') {
      this.generateCareerAdvice();
    }
  }

  closeTool(): void {
    this.activeTool = null;
  }

  calculateROI(): void {
    const tuition = Number(this.calculator.tuition) || 0;
    const living = Number(this.calculator.monthlyLiving) || 0;
    const months = Number(this.calculator.months) || 1;
    const salary = Number(this.calculator.monthlySalary) || 0;

    const totalInvestment = tuition + living * months;
    const annualSalary = salary * 12;
    const paybackMonths = salary > 0 ? Math.ceil(totalInvestment / salary) : 0;

    this.calculatorResult = {
      totalInvestment,
      annualSalary,
      paybackMonths,
      message:
        paybackMonths > 0
          ? 'Your estimated investment is ₹' + totalInvestment.toLocaleString() + '. Based on an expected monthly salary of ₹' + salary.toLocaleString() + ', the payback period is approximately ' + paybackMonths + ' months.'
          : 'Enter a valid expected monthly salary to calculate the payback period.'
    };
  }

  generateResume(): void {
    const name = this.resume.name || 'Candidate Name';
    const role = this.resume.role || 'Target Role';
    const education = this.resume.education || 'Education details not provided';
    const skills = this.resume.skills || 'Skills not provided';
    const experience = this.resume.experience || 'Experience or project details not provided';

    this.resumeOutput =
      'EUROPEAN STANDARD RESUME DRAFT\n\n' +
      'Name:\n' + name + '\n\n' +
      'Target Role:\n' + role + '\n\n' +
      'Professional Summary:\n' +
      'Motivated and career-focused candidate targeting ' + role + '. Demonstrates strong learning ability, structured communication, and readiness to work in an international environment.\n\n' +
      'Education:\n' + education + '\n\n' +
      'Core Skills:\n' + skills + '\n\n' +
      'Experience / Projects:\n' + experience + '\n\n' +
      'Career Objective:\n' +
      'To build a long-term international career by applying technical knowledge, professional discipline, communication skills, and continuous learning orientation.\n\n' +
      'Suggested Improvements:\n' +
      '1. Add measurable achievements wherever possible.\n' +
      '2. Include language proficiency and certifications.\n' +
      '3. Keep the resume concise, preferably 1 to 2 pages.\n' +
      '4. Align keywords with the target job description.';
  }

  generateCareerAdvice(): void {
    const q = this.advisor.qualification;
    const field = this.advisor.field;
    const destination = this.advisor.destination;
    const language = this.advisor.language;

    const baseStart =
      q === '10th'
        ? 'Early Career Explorer'
        : q === '12th'
          ? 'School Graduate'
          : q === 'Diploma'
            ? 'Diploma Candidate'
            : q === 'UG'
              ? 'Graduate Candidate'
              : 'Postgraduate Candidate';

    if (field === 'IT') {
      this.advisorPathway = {
        startRole: baseStart,
        primaryRole: {
          title: 'Software / IT Associate',
          subtitle: destination,
          routeType: 'common'
        },
        middleRoles: [
          {
            title: 'Junior Developer',
            subtitle: 'Entry-level tech role',
            routeType: 'somewhat'
          },
          {
            title: 'IT Support Specialist',
            subtitle: 'Infrastructure / support',
            routeType: 'less'
          }
        ],
        seniorRoles: [
          {
            title: 'Software Engineer',
            subtitle: 'Product / platform role',
            routeType: 'common'
          },
          {
            title: 'Cloud / DevOps Engineer',
            subtitle: 'Specialised tech path',
            routeType: 'somewhat'
          },
          {
            title: 'Technical Lead',
            subtitle: 'Leadership route',
            routeType: 'less'
          }
        ]
      };
      return;
    }

    if (field === 'Healthcare') {
      this.advisorPathway = {
        startRole: baseStart,
        primaryRole: {
          title: destination === 'Germany' ? 'Healthcare Ausbildung Candidate' : 'Healthcare Student',
          subtitle: language === 'None' ? 'Language readiness needed' : language + ' language readiness',
          routeType: 'common'
        },
        middleRoles: [
          {
            title: 'Nursing Assistant',
            subtitle: 'Care support route',
            routeType: 'somewhat'
          },
          {
            title: 'Healthcare Trainee',
            subtitle: 'Training pathway',
            routeType: 'common'
          }
        ],
        seniorRoles: [
          {
            title: 'Registered Nurse',
            subtitle: 'Clinical career route',
            routeType: 'common'
          },
          {
            title: 'Hospital Department Lead',
            subtitle: 'Operational leadership',
            routeType: 'somewhat'
          },
          {
            title: 'Healthcare Manager',
            subtitle: 'Management pathway',
            routeType: 'less'
          }
        ]
      };
      return;
    }

    if (field === 'Hospitality') {
      this.advisorPathway = {
        startRole: baseStart,
        primaryRole: {
          title: 'Hospitality Trainee',
          subtitle: destination,
          routeType: 'common'
        },
        middleRoles: [
          {
            title: 'Hotel Operations Associate',
            subtitle: 'Front office / F&B',
            routeType: 'common'
          },
          {
            title: 'Culinary Trainee',
            subtitle: 'Kitchen pathway',
            routeType: 'somewhat'
          }
        ],
        seniorRoles: [
          {
            title: 'Hotel Supervisor',
            subtitle: 'Team handling role',
            routeType: 'common'
          },
          {
            title: 'F&B Manager',
            subtitle: 'Service leadership',
            routeType: 'somewhat'
          },
          {
            title: 'Hotel Operations Manager',
            subtitle: 'Strategic operations',
            routeType: 'less'
          }
        ]
      };
      return;
    }

    if (field === 'Engineering') {
      this.advisorPathway = {
        startRole: baseStart,
        primaryRole: {
          title: 'Engineering Pathway Candidate',
          subtitle: destination,
          routeType: 'common'
        },
        middleRoles: [
          {
            title: 'Technician / Trainee Engineer',
            subtitle: 'Applied route',
            routeType: 'somewhat'
          },
          {
            title: 'Engineering Student',
            subtitle: 'Academic route',
            routeType: 'common'
          }
        ],
        seniorRoles: [
          {
            title: 'Project Engineer',
            subtitle: 'Execution role',
            routeType: 'common'
          },
          {
            title: 'Design / Quality Engineer',
            subtitle: 'Specialist route',
            routeType: 'somewhat'
          },
          {
            title: 'Engineering Manager',
            subtitle: 'Leadership pathway',
            routeType: 'less'
          }
        ]
      };
      return;
    }

    this.advisorPathway = {
      startRole: baseStart,
      primaryRole: {
        title: 'Business Pathway Candidate',
        subtitle: destination,
        routeType: 'common'
      },
      middleRoles: [
        {
          title: 'Business Student',
          subtitle: 'Academic route',
          routeType: 'common'
        },
        {
          title: 'Sales / Operations Associate',
          subtitle: 'Work route',
          routeType: 'somewhat'
        }
      ],
      seniorRoles: [
        {
          title: 'Business Analyst',
          subtitle: 'Management support',
          routeType: 'common'
        },
        {
          title: 'Operations Manager',
          subtitle: 'Functional leadership',
          routeType: 'somewhat'
        },
        {
          title: 'Country / Program Manager',
          subtitle: 'Strategic leadership',
          routeType: 'less'
        }
      ]
    };
  }

  generateInterviewPrep(): void {
    const role = this.interview.role || 'your selected role';
    const type = this.interview.type;
    const level = this.interview.level;

    this.interviewQuestions = [
      'Tell me about yourself and why you are interested in ' + role + '.',
      'Why did you choose this ' + type + ' pathway instead of another option?',
      'What do you understand about the responsibilities and expectations of ' + role + '?',
      'What are your strengths, and how will they help you succeed in this pathway?',
      'What challenges do you expect, and how will you manage them?',
      'How does this opportunity connect with your long-term career goal?',
      'Why should the institution or employer select you over other candidates?',
      'As a ' + level + ' candidate, what preparation have you already completed?'
    ];
  }

  copyText(text: string): void {
    navigator.clipboard?.writeText(text);
  }
}