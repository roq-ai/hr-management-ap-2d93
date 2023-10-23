interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator'],
  tenantName: 'Team',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage their application',
    'Submit resume and cover letter',
    'Check application status',
    'Apply to job postings',
  ],
  ownerAbilities: [
    'Manage training',
    'Manage benefits',
    'Manage performance reviews',
    'Manage schedules',
    'Manage departments',
    'Manage positions',
    'Manage users',
    'Manage teams',
    'Manage job postings',
    'Manage applicants',
    'Manage employees',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6d821ea8-e441-43a6-9107-7c428585b9fb',
};
