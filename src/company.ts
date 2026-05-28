/** Legal entity details used on policy pages and site footers. */
export const COMPANY_LEGAL_NAME = 'IXC Software Distribution Corp.';
export const COMPANY_ADDRESS = {
  street: '7950 NW 53rd Street, Suite 337',
  city: 'Miami',
  state: 'Florida',
  postalCode: '33166',
  country: 'United States',
} as const;

export const COMPANY_ADDRESS_LINE = `${COMPANY_ADDRESS.street}, ${COMPANY_ADDRESS.city}, ${COMPANY_ADDRESS.state} ${COMPANY_ADDRESS.postalCode}`;

export const COMPANY_WEBSITE = 'https://ixc.ua';
export const COMPANY_PRIVACY_EMAIL = 'sales@ixc.ua';
