
export interface ConfirmationRequest {
  clientName: string;
  bankName: string;
  accountNumber: string;
}

export interface ConfirmationData {
  accountHolder: string;
  bankName: string;
  accountNumber: string; // Masked
  accountType: string;
  balance: number;
  currency: string;
  asOfDate: string;
  confirmationId: string;
}
