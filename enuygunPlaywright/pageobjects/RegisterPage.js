const { expect } = require("@playwright/test");

export class RegisterPage {
  EMAIL_INPUT = "//*[contains(@class,'katalon__modal-email')] ";

  PASS_INPUT = ".katalon__modal-password";

  TERMS_CHECKBOX = "#_acceptEmails";

  TERMS_MESSAGE_LOCATOR = "span.custom-control-description";

  ACCEPT_SIGN_UP_BUTTON = ".katalon__modal-register-button";

  INVALID_EMAIL_MESSAGE_LOCATOR =
    ".membership--form-field--base:has(input[name='_email']) p";

  INVALID_PASS_MESSAGE_LOCATOR =
    ".membership--form-field--base:has(input[name='_password']) p";

  constructor(page) {
    this.page = page;
    this.emailInput = page.locator(this.EMAIL_INPUT);
    this.passInput = page.locator(this.PASS_INPUT);
    this.terms = page.locator(this.TERMS_CHECKBOX);
    this.termsMessage = page.locator(this.TERMS_MESSAGE_LOCATOR);
    this.acceptSignUpButton = page.locator(this.ACCEPT_SIGN_UP_BUTTON);
    this.invalidEmailMessage = page.locator(this.INVALID_EMAIL_MESSAGE_LOCATOR);
    this.invalidPassMessage = page.locator(this.INVALID_PASS_MESSAGE_LOCATOR);
  }

  TERMS_MESSAGE =
    "İndirimler ve kampanyalardan Rıza Metni Rıza Metniİletişim bilgilerimin ticari ileti gönderilmesi, reklam/kampanya promosyon süreçlerinin ve iletişim faaliyetlerinin yürütülmesi amacıyla işlenmesine KVKK Md.5/1 kapsamında rıza veriyorum.kapsamında haberdar olmak istiyorum.";

  EMAIL_ERROR_MESSAGE =
    "Lütfen, geçerli bir e-posta adresi girdiğinizden emin olun.";

  PASS_ERROR_MESSAGE = "Bu alan en az 6 karakterden oluşmalıdır.";

  async fillValidEmailAndValidPasswordCase(email, password, isTermsAccept) {
    await this.fillInputFields(email, password, isTermsAccept);
  }

  async fillInvalidEmailAndValidPasswordCase(email, password, isTermsAccept) {
    await this.fillInputFields(email, password, isTermsAccept);
    expect(await this.invalidEmailMessage).toHaveText(this.EMAIL_ERROR_MESSAGE);
  }

  async fillValidEmailAndInvalidPasswordCase(email, password, isTermsAccept) {
    await this.fillInputFields(email, password, isTermsAccept);
    expect(await this.invalidPassMessage).toHaveText(this.PASS_ERROR_MESSAGE);
  }

  async fillInvalidEmailAndInvalidPasswordCase(email, password, isTermsAccept) {
    await this.fillInputFields(email, password, isTermsAccept);
    expect(await this.invalidEmailMessage).toHaveText(this.EMAIL_ERROR_MESSAGE);
    expect(await this.invalidPassMessage).toHaveText(this.PASS_ERROR_MESSAGE);
  }

  /**
   * This method is returning to the Fill Input Fields a time
   * @param email
   * @param password
   * @param isAccept
   */
  async fillInputFields(email, password, isTermsAccept) {
    await this.emailInput.type(email);
    await this.passInput.type(password);

    if (isTermsAccept) {
      await this.terms.click();
      expect(await this.terms).toBeChecked();
      expect(await this.termsMessage).toHaveText(this.TERMS_MESSAGE);
    }
    await this.acceptSignUpButton.click();
  }
}
