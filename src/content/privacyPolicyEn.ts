export interface PrivacySection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

/** English privacy policy — governing language for IXC Software Distribution Corp. */
export const PRIVACY_POLICY_LAST_UPDATED = 'May 28, 2026';

export const privacyPolicySectionsEn: PrivacySection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'IXC Software Distribution Corp. ("IXC," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website at ixc.ua (the "Site"), contact us, or otherwise interact with us online in connection with the Site.',
      'This policy applies to visitors and prospects who use the Site. If you are a customer using IXC Softswitch or other IXC products under a separate agreement, additional terms in your contract, order form, or data processing addendum may also apply to operational and call-related data processed in those services.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    paragraphs: ['We may collect the following categories of information:'],
    list: [
      'Contact information you provide — such as your name, company name, email address, phone number, and message content when you submit our contact form or email us.',
      'Communications — records of correspondence if you contact our sales or support teams.',
      'Technical and usage information — such as IP address, browser type, device type, operating system, referring URLs, pages viewed, and approximate location derived from IP address, collected automatically when you use the Site.',
      'Preferences stored on your device — such as language and theme settings saved in your browser’s local storage when you use those Site features.',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Information',
    paragraphs: ['We use personal information to:'],
    list: [
      'Respond to inquiries, demo requests, and support requests.',
      'Provide information about IXC products and services you request.',
      'Operate, maintain, secure, and improve the Site.',
      'Analyze aggregated or de-identified usage to understand how the Site is used.',
      'Comply with legal obligations and protect our rights, users, and the public.',
      'Send marketing communications where permitted by law and subject to your choices.',
    ],
  },
  {
    id: 'legal-bases',
    title: 'Legal Bases (EEA/UK Visitors)',
    paragraphs: [
      'If you are located in the European Economic Area or the United Kingdom, we process personal information on one or more of the following bases: performance of a contract or steps prior to entering a contract; legitimate interests (such as operating and improving the Site and communicating about our services), balanced against your rights; compliance with legal obligations; and consent where required (for example, for certain cookies or marketing, where applicable).',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and Similar Technologies',
    paragraphs: [
      'The Site may use essential cookies or similar technologies necessary for basic functionality. We also store preferences (such as language and light/dark theme) in your browser’s local storage. You can control cookies through your browser settings; disabling cookies may affect some Site features.',
      'We do not use third-party advertising cookies on the Site based on our current configuration. If we introduce analytics or marketing tags in the future, we will update this policy.',
    ],
  },
  {
    id: 'sharing',
    title: 'How We Share Information',
    paragraphs: [
      'We do not sell your personal information. We may share information with:',
    ],
    list: [
      'Service providers who assist us — such as form processing (Formspree), hosting, email delivery, and IT security — under contractual obligations to protect data and use it only for our instructions.',
      'Professional advisers (lawyers, accountants) where necessary.',
      'Authorities when required by law, court order, or to protect rights and safety.',
      'A successor entity in connection with a merger, acquisition, or asset sale, subject to this policy or notice to you.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links and Services',
    paragraphs: [
      'The Site may link to third-party websites (for example, social media or partner sites). Their privacy practices are governed by their own policies. When you submit our contact form, information is transmitted to our form service provider. Google Fonts may be loaded to display typography; your browser may send standard technical data to Google when those resources are requested.',
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    paragraphs: [
      'We retain personal information for as long as needed to fulfill the purposes described in this policy, including to respond to inquiries, maintain business records, resolve disputes, and comply with legal obligations. Retention periods vary depending on the type of data and our legal and operational requirements.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    paragraphs: [
      'We implement reasonable administrative, technical, and organizational measures designed to protect personal information. No method of transmission over the Internet or electronic storage is completely secure; we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Privacy Rights',
    paragraphs: [
      'Depending on where you live, you may have rights to access, correct, delete, or obtain a copy of your personal information; object to or restrict certain processing; withdraw consent where processing is consent-based; and lodge a complaint with a supervisory authority.',
      'To exercise applicable rights, contact us using the details below. We may need to verify your identity before responding. We will not discriminate against you for exercising privacy rights where prohibited by law.',
    ],
  },
  {
    id: 'california',
    title: 'California Residents',
    paragraphs: [
      'If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), as amended, including the right to know categories of personal information collected, the right to delete personal information subject to exceptions, and the right to opt out of the "sale" or "sharing" of personal information. IXC does not sell personal information as defined under the CCPA. To submit a request, email us at the address below.',
    ],
  },
  {
    id: 'international',
    title: 'International Transfers',
    paragraphs: [
      'IXC is based in the United States. If you access the Site from outside the United States, your information may be processed in the United States and other countries where we or our service providers operate, which may have different data protection laws than your country. Where required, we use appropriate safeguards for cross-border transfers.',
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    paragraphs: [
      'The Site is intended for business users and is not directed to children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can delete it.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The "Last updated" date at the top indicates when changes were last made. Material changes will be posted on this page. Your continued use of the Site after an update constitutes acceptance of the revised policy, to the extent permitted by law.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    paragraphs: [
      'For privacy questions, requests, or complaints, contact:',
    ],
  },
];
