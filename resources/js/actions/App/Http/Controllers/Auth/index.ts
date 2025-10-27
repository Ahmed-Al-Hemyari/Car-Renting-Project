import AuthenticatedSessionController from './AuthenticatedSessionController'
import PasswordResetLinkController from './PasswordResetLinkController'
import RegisteredUserController from './RegisteredUserController'
import EmailVerificationNotificationController from './EmailVerificationNotificationController'
import EmailVerificationPromptController from './EmailVerificationPromptController'
import VerifyEmailController from './VerifyEmailController'
const Auth = {
    AuthenticatedSessionController: Object.assign(AuthenticatedSessionController, AuthenticatedSessionController),
PasswordResetLinkController: Object.assign(PasswordResetLinkController, PasswordResetLinkController),
RegisteredUserController: Object.assign(RegisteredUserController, RegisteredUserController),
EmailVerificationNotificationController: Object.assign(EmailVerificationNotificationController, EmailVerificationNotificationController),
EmailVerificationPromptController: Object.assign(EmailVerificationPromptController, EmailVerificationPromptController),
VerifyEmailController: Object.assign(VerifyEmailController, VerifyEmailController),
}

export default Auth