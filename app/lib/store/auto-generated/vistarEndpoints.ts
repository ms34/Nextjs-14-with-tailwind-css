import { api, enhanceEndpoints } from "../services/api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAccessAccessReviewDetailById: build.query<
      GetAccessAccessReviewDetailByIdApiResponse,
      GetAccessAccessReviewDetailByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-review-detail/${queryArg.id}/`,
      }),
    }),
    putAccessAccessReviewDetailById: build.mutation<
      PutAccessAccessReviewDetailByIdApiResponse,
      PutAccessAccessReviewDetailByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-review-detail/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.accessReviewVendor,
      }),
    }),
    patchAccessAccessReviewDetailById: build.mutation<
      PatchAccessAccessReviewDetailByIdApiResponse,
      PatchAccessAccessReviewDetailByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-review-detail/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.accessReviewVendor,
      }),
    }),
    deleteAccessAccessReviewDetailById: build.mutation<
      DeleteAccessAccessReviewDetailByIdApiResponse,
      DeleteAccessAccessReviewDetailByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-review-detail/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    getAccessAccessReviews: build.query<
      GetAccessAccessReviewsApiResponse,
      GetAccessAccessReviewsApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-reviews/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    postAccessAccessReviews: build.mutation<
      PostAccessAccessReviewsApiResponse,
      PostAccessAccessReviewsApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-reviews/`,
        method: "POST",
        body: queryArg.accessReview,
      }),
    }),
    getAccessAccessReviewsById: build.query<
      GetAccessAccessReviewsByIdApiResponse,
      GetAccessAccessReviewsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/access/access-reviews/${queryArg.id}/` }),
    }),
    putAccessAccessReviewsById: build.mutation<
      PutAccessAccessReviewsByIdApiResponse,
      PutAccessAccessReviewsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-reviews/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.accessReview,
      }),
    }),
    patchAccessAccessReviewsById: build.mutation<
      PatchAccessAccessReviewsByIdApiResponse,
      PatchAccessAccessReviewsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-reviews/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.accessReview,
      }),
    }),
    deleteAccessAccessReviewsById: build.mutation<
      DeleteAccessAccessReviewsByIdApiResponse,
      DeleteAccessAccessReviewsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access-reviews/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    accessAccessList: build.query<
      AccessAccessListApiResponse,
      AccessAccessListApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    accessAccessCreate: build.mutation<
      AccessAccessCreateApiResponse,
      AccessAccessCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access/`,
        method: "POST",
        body: queryArg.access,
      }),
    }),
    accessAccessRead: build.query<
      AccessAccessReadApiResponse,
      AccessAccessReadApiArg
    >({
      query: (queryArg) => ({ url: `/access/access/${queryArg.id}/` }),
    }),
    accessAccessUpdate: build.mutation<
      AccessAccessUpdateApiResponse,
      AccessAccessUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.accessModel,
      }),
    }),
    accessAccessDelete: build.mutation<
      AccessAccessDeleteApiResponse,
      AccessAccessDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    accessAccessChangeOwnerPartialUpdate: build.mutation<
      AccessAccessChangeOwnerPartialUpdateApiResponse,
      AccessAccessChangeOwnerPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/access/access_change_owner/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    accessAccessScanCreate: build.mutation<
      AccessAccessScanCreateApiResponse,
      AccessAccessScanCreateApiArg
    >({
      query: () => ({ url: `/access/access_scan/`, method: "POST" }),
    }),
    getAccessExportAccessJsonById: build.query<
      GetAccessExportAccessJsonByIdApiResponse,
      GetAccessExportAccessJsonByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/access/export-access-json/${queryArg.id}/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    accountsApolloList: build.query<
      AccountsApolloListApiResponse,
      AccountsApolloListApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/apollo_/`,
        params: { domain: queryArg.domain },
      }),
    }),
    accountsAuthenticationCodeRequestCreate: build.mutation<
      AccountsAuthenticationCodeRequestCreateApiResponse,
      AccountsAuthenticationCodeRequestCreateApiArg
    >({
      query: () => ({
        url: `/accounts/authentication/code/request/`,
        method: "POST",
      }),
    }),
    accountsAuthenticationLoginCreate: build.mutation<
      AccountsAuthenticationLoginCreateApiResponse,
      AccountsAuthenticationLoginCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/authentication/login/`,
        method: "POST",
        body: queryArg.login,
      }),
    }),
    accountsAuthenticationLoginCodeCreate: build.mutation<
      AccountsAuthenticationLoginCodeCreateApiResponse,
      AccountsAuthenticationLoginCodeCreateApiArg
    >({
      query: () => ({
        url: `/accounts/authentication/login/code/`,
        method: "POST",
      }),
    }),
    postAccountsAuthenticationMfaChangePrimaryMethod: build.mutation<
      PostAccountsAuthenticationMfaChangePrimaryMethodApiResponse,
      PostAccountsAuthenticationMfaChangePrimaryMethodApiArg
    >({
      query: () => ({
        url: `/accounts/authentication/mfa/change-primary-method/`,
        method: "POST",
      }),
    }),
    accountsAuthenticationMfaConfigList: build.query<
      AccountsAuthenticationMfaConfigListApiResponse,
      AccountsAuthenticationMfaConfigListApiArg
    >({
      query: () => ({ url: `/accounts/authentication/mfa/config/` }),
    }),
    getAccountsAuthenticationMfaUserActiveMethods: build.query<
      GetAccountsAuthenticationMfaUserActiveMethodsApiResponse,
      GetAccountsAuthenticationMfaUserActiveMethodsApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/authentication/mfa/user-active-methods/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    accountsAuthenticationSsoGoogleCreate: build.mutation<
      AccountsAuthenticationSsoGoogleCreateApiResponse,
      AccountsAuthenticationSsoGoogleCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/authentication/sso/google/`,
        method: "POST",
        body: queryArg.sso,
      }),
    }),
    accountsAuthenticationSsoMicrosoftCreate: build.mutation<
      AccountsAuthenticationSsoMicrosoftCreateApiResponse,
      AccountsAuthenticationSsoMicrosoftCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/authentication/sso/microsoft/`,
        method: "POST",
        body: queryArg.sso,
      }),
    }),
    accountsAuthenticationActivateCreate: build.mutation<
      AccountsAuthenticationActivateCreateApiResponse,
      AccountsAuthenticationActivateCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/authentication/${queryArg.method}/activate/`,
        method: "POST",
      }),
    }),
    accountsAuthenticationActivateConfirmCreate: build.mutation<
      AccountsAuthenticationActivateConfirmCreateApiResponse,
      AccountsAuthenticationActivateConfirmCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/authentication/${queryArg.method}/activate/confirm/`,
        method: "POST",
      }),
    }),
    accountsAuthenticationCodesRegenerateCreate: build.mutation<
      AccountsAuthenticationCodesRegenerateCreateApiResponse,
      AccountsAuthenticationCodesRegenerateCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/authentication/${queryArg.method}/codes/regenerate/`,
        method: "POST",
      }),
    }),
    accountsAuthenticationDeactivateCreate: build.mutation<
      AccountsAuthenticationDeactivateCreateApiResponse,
      AccountsAuthenticationDeactivateCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/authentication/${queryArg.method}/deactivate/`,
        method: "POST",
      }),
    }),
    accountsCompanyList: build.query<
      AccountsCompanyListApiResponse,
      AccountsCompanyListApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/company/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    accountsCompanyRead: build.query<
      AccountsCompanyReadApiResponse,
      AccountsCompanyReadApiArg
    >({
      query: (queryArg) => ({ url: `/accounts/company/${queryArg.id}/` }),
    }),
    accountsCompanyUpdate: build.mutation<
      AccountsCompanyUpdateApiResponse,
      AccountsCompanyUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/company/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.companyInfo,
      }),
    }),
    accountsCompanyPartialUpdate: build.mutation<
      AccountsCompanyPartialUpdateApiResponse,
      AccountsCompanyPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/company/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.companyInfo,
      }),
    }),
    accountsComplianceManagerList: build.query<
      AccountsComplianceManagerListApiResponse,
      AccountsComplianceManagerListApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/compliance_manager/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    accountsComplianceManagerRead: build.query<
      AccountsComplianceManagerReadApiResponse,
      AccountsComplianceManagerReadApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/compliance_manager/${queryArg.id}/`,
      }),
    }),
    accountsComplianceManagerUpdate: build.mutation<
      AccountsComplianceManagerUpdateApiResponse,
      AccountsComplianceManagerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/compliance_manager/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.complianceManger,
      }),
    }),
    accountsComplianceManagerPartialUpdate: build.mutation<
      AccountsComplianceManagerPartialUpdateApiResponse,
      AccountsComplianceManagerPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/compliance_manager/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.complianceManger,
      }),
    }),
    accountsCurrentUserList: build.query<
      AccountsCurrentUserListApiResponse,
      AccountsCurrentUserListApiArg
    >({
      query: () => ({ url: `/accounts/current_user/` }),
    }),
    accountsCustomVerificationEmailSentList: build.query<
      AccountsCustomVerificationEmailSentListApiResponse,
      AccountsCustomVerificationEmailSentListApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/custom_verification_email_sent/`,
        params: { email: queryArg.email },
      }),
    }),
    accountsPasswordResetCreate: build.mutation<
      AccountsPasswordResetCreateApiResponse,
      AccountsPasswordResetCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/password_reset/`,
        method: "POST",
        body: queryArg.email,
      }),
    }),
    accountsPasswordResetConfirmCreate: build.mutation<
      AccountsPasswordResetConfirmCreateApiResponse,
      AccountsPasswordResetConfirmCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/password_reset/confirm/`,
        method: "POST",
        body: queryArg.passwordToken,
      }),
    }),
    accountsPasswordResetValidateTokenCreate: build.mutation<
      AccountsPasswordResetValidateTokenCreateApiResponse,
      AccountsPasswordResetValidateTokenCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/password_reset/validate_token/`,
        method: "POST",
        body: queryArg.resetToken,
      }),
    }),
    postAccountsRestAuthPasswordChange: build.mutation<
      PostAccountsRestAuthPasswordChangeApiResponse,
      PostAccountsRestAuthPasswordChangeApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/rest-auth/password/change/`,
        method: "POST",
        body: queryArg.passwordChange,
      }),
    }),
    postAccountsRestAuthRegistration: build.mutation<
      PostAccountsRestAuthRegistrationApiResponse,
      PostAccountsRestAuthRegistrationApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/rest-auth/registration/`,
        method: "POST",
        body: queryArg.restAuthRegister,
      }),
    }),
    postAccountsRestAuthRegistrationAccountConfirmEmailByKey: build.mutation<
      PostAccountsRestAuthRegistrationAccountConfirmEmailByKeyApiResponse,
      PostAccountsRestAuthRegistrationAccountConfirmEmailByKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/rest-auth/registration/account-confirm-email/${queryArg.key}/`,
        method: "POST",
      }),
    }),
    accountsTokenRefreshCreate: build.mutation<
      AccountsTokenRefreshCreateApiResponse,
      AccountsTokenRefreshCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/token/refresh/`,
        method: "POST",
        body: queryArg.tokenRefresh,
      }),
    }),
    accountsTokenVerifyCreate: build.mutation<
      AccountsTokenVerifyCreateApiResponse,
      AccountsTokenVerifyCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/token/verify/`,
        method: "POST",
        body: queryArg.tokenVerify,
      }),
    }),
    accountsUserAuditorList: build.query<
      AccountsUserAuditorListApiResponse,
      AccountsUserAuditorListApiArg
    >({
      query: () => ({ url: `/accounts/user_auditor/` }),
    }),
    accountsUserAuditorCreate: build.mutation<
      AccountsUserAuditorCreateApiResponse,
      AccountsUserAuditorCreateApiArg
    >({
      query: () => ({ url: `/accounts/user_auditor/`, method: "POST" }),
    }),
    accountsUserAuditorUpdate: build.mutation<
      AccountsUserAuditorUpdateApiResponse,
      AccountsUserAuditorUpdateApiArg
    >({
      query: () => ({ url: `/accounts/user_auditor/`, method: "PUT" }),
    }),
    chatbotChatsCreate: build.mutation<
      ChatbotChatsCreateApiResponse,
      ChatbotChatsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/chatbot/chats/`,
        method: "POST",
        body: queryArg.chatbot,
      }),
    }),
    complianceControlsList: build.query<
      ComplianceControlsListApiResponse,
      ComplianceControlsListApiArg
    >({
      query: (queryArg) => ({
        url: `/compliance/controls/`,
        params: {
          search: queryArg.search,
          order_by: queryArg.orderBy,
          status: queryArg.status,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    complianceControlsRunTestAll: build.mutation<
      ComplianceControlsRunTestAllApiResponse,
      ComplianceControlsRunTestAllApiArg
    >({
      query: (queryArg) => ({
        url: `/compliance/controls/run_test_all/`,
        method: "POST",
        body: queryArg.control,
      }),
    }),
    complianceControlsSummaryList: build.query<
      ComplianceControlsSummaryListApiResponse,
      ComplianceControlsSummaryListApiArg
    >({
      query: () => ({ url: `/compliance/controls/summary/` }),
    }),
    complianceControlsRead: build.query<
      ComplianceControlsReadApiResponse,
      ComplianceControlsReadApiArg
    >({
      query: (queryArg) => ({ url: `/compliance/controls/${queryArg.id}/` }),
    }),
    complianceDownloadSlaTestsList: build.query<
      ComplianceDownloadSlaTestsListApiResponse,
      ComplianceDownloadSlaTestsListApiArg
    >({
      query: (queryArg) => ({
        url: `/compliance/download_sla_tests/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    complianceDownloadSlaTestsCreate: build.mutation<
      ComplianceDownloadSlaTestsCreateApiResponse,
      ComplianceDownloadSlaTestsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/compliance/download_sla_tests/`,
        method: "POST",
        body: queryArg.sla,
        params: { domain: queryArg.domain },
      }),
    }),
    complianceDownloadSlaTestsRead: build.query<
      ComplianceDownloadSlaTestsReadApiResponse,
      ComplianceDownloadSlaTestsReadApiArg
    >({
      query: (queryArg) => ({
        url: `/compliance/download_sla_tests/${queryArg.id}/`,
      }),
    }),
    complianceFrameworkList: build.query<
      ComplianceFrameworkListApiResponse,
      ComplianceFrameworkListApiArg
    >({
      query: () => ({ url: `/compliance/framework/` }),
    }),
    complianceHomeSummaryList: build.query<
      ComplianceHomeSummaryListApiResponse,
      ComplianceHomeSummaryListApiArg
    >({
      query: () => ({ url: `/compliance/home/summary/` }),
    }),
    complianceSlaDateEditUpdate: build.mutation<
      ComplianceSlaDateEditUpdateApiResponse,
      ComplianceSlaDateEditUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/compliance/sla_date_edit/`,
        method: "PUT",
        body: queryArg.sla,
        params: { number_of_days: queryArg.numberOfDays },
      }),
    }),
    complianceSlaDateEditPartialUpdate: build.mutation<
      ComplianceSlaDateEditPartialUpdateApiResponse,
      ComplianceSlaDateEditPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/compliance/sla_date_edit/`,
        method: "PATCH",
        body: queryArg.sla,
      }),
    }),
    complianceSlaTestsList: build.query<
      ComplianceSlaTestsListApiResponse,
      ComplianceSlaTestsListApiArg
    >({
      query: (queryArg) => ({
        url: `/compliance/sla_tests/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    complianceSlaTestsRead: build.query<
      ComplianceSlaTestsReadApiResponse,
      ComplianceSlaTestsReadApiArg
    >({
      query: (queryArg) => ({ url: `/compliance/sla_tests/${queryArg.id}/` }),
    }),
    computersComputersList: build.query<
      ComputersComputersListApiResponse,
      ComputersComputersListApiArg
    >({
      query: (queryArg) => ({
        url: `/computers/computers/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    computersComputersCreate: build.mutation<
      ComputersComputersCreateApiResponse,
      ComputersComputersCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/computers/computers/`,
        method: "POST",
        body: queryArg.computer,
      }),
    }),
    computersComputersRead: build.query<
      ComputersComputersReadApiResponse,
      ComputersComputersReadApiArg
    >({
      query: (queryArg) => ({ url: `/computers/computers/${queryArg.id}/` }),
    }),
    computersComputersPartialUpdate: build.mutation<
      ComputersComputersPartialUpdateApiResponse,
      ComputersComputersPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/computers/computers/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.computer,
      }),
    }),
    computersComputersDelete: build.mutation<
      ComputersComputersDeleteApiResponse,
      ComputersComputersDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/computers/computers/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    computersOsqueryLogDataCreate: build.mutation<
      ComputersOsqueryLogDataCreateApiResponse,
      ComputersOsqueryLogDataCreateApiArg
    >({
      query: () => ({ url: `/computers/osquery_log_data/`, method: "POST" }),
    }),
    documentsList: build.query<DocumentsListApiResponse, DocumentsListApiArg>({
      query: (queryArg) => ({
        url: `/documents/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    documentsCreate: build.mutation<
      DocumentsCreateApiResponse,
      DocumentsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/documents/`,
        method: "POST",
        body: queryArg.document,
      }),
    }),
    documentsGetDocumentTypes: build.query<
      DocumentsGetDocumentTypesApiResponse,
      DocumentsGetDocumentTypesApiArg
    >({
      query: (queryArg) => ({
        url: `/documents/get_document_types/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    documentsDelete: build.mutation<
      DocumentsDeleteApiResponse,
      DocumentsDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/documents/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    employeesList: build.query<EmployeesListApiResponse, EmployeesListApiArg>({
      query: (queryArg) => ({
        url: `/employees/`,
        params: {
          employment_type: queryArg.employmentType,
          office365_mfa: queryArg.office365Mfa,
          gsuite_mfa: queryArg.gsuiteMfa,
          slack_mfa: queryArg.slackMfa,
          background_checked: queryArg.backgroundChecked,
          accepted_policies: queryArg.acceptedPolicies,
          security_training: queryArg.securityTraining,
          search: queryArg.search,
          order_by: queryArg.orderBy,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    employeesCreate: build.mutation<
      EmployeesCreateApiResponse,
      EmployeesCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/employees/`,
        method: "POST",
        body: queryArg.employee,
      }),
    }),
    employeesPost: build.mutation<
      EmployeesPostApiResponse,
      EmployeesPostApiArg
    >({
      query: (queryArg) => ({
        url: `/employees/accept_policies/`,
        method: "POST",
        body: queryArg.employee,
      }),
    }),
    employeesCurrentEmployeeRead: build.query<
      EmployeesCurrentEmployeeReadApiResponse,
      EmployeesCurrentEmployeeReadApiArg
    >({
      query: (queryArg) => ({
        url: `/employees/current_employee/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    employeesEmployeeMdmList: build.query<
      EmployeesEmployeeMdmListApiResponse,
      EmployeesEmployeeMdmListApiArg
    >({
      query: (queryArg) => ({
        url: `/employees/employeeMdm/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    employeesEmployeeMdmCreate: build.mutation<
      EmployeesEmployeeMdmCreateApiResponse,
      EmployeesEmployeeMdmCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/employees/employeeMdm/`,
        method: "POST",
        body: queryArg.employeeMdm,
      }),
    }),
    employeesEmploymentAccessRead: build.query<
      EmployeesEmploymentAccessReadApiResponse,
      EmployeesEmploymentAccessReadApiArg
    >({
      query: (queryArg) => ({
        url: `/employees/employment_access/${queryArg.id}/`,
      }),
    }),
    employeesEmploymentTypeCreate: build.mutation<
      EmployeesEmploymentTypeCreateApiResponse,
      EmployeesEmploymentTypeCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/employees/employment_type/`,
        method: "POST",
        body: queryArg.employeeEmploymentTypeUpdate,
      }),
    }),
    employeesMergeCreate: build.mutation<
      EmployeesMergeCreateApiResponse,
      EmployeesMergeCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/employees/merge/`,
        method: "POST",
        body: queryArg.employeeMerge,
      }),
    }),
    employeesPut: build.mutation<EmployeesPutApiResponse, EmployeesPutApiArg>({
      query: (queryArg) => ({
        url: `/employees/upload_employee_docmuent/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.employee,
      }),
    }),
    integrationsList: build.query<
      IntegrationsListApiResponse,
      IntegrationsListApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/`,
        params: { template_name: queryArg.templateName },
      }),
    }),
    integrationsAwsCreate: build.mutation<
      IntegrationsAwsCreateApiResponse,
      IntegrationsAwsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/aws/`,
        method: "POST",
        body: queryArg.aws,
      }),
    }),
    integrationsAwscloudfList: build.query<
      IntegrationsAwscloudfListApiResponse,
      IntegrationsAwscloudfListApiArg
    >({
      query: () => ({ url: `/integrations/awscloudf` }),
    }),
    integrationsAwscloudfCreate: build.mutation<
      IntegrationsAwscloudfCreateApiResponse,
      IntegrationsAwscloudfCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/awscloudf`,
        method: "POST",
        body: queryArg.awsSerializerCloudFormation,
      }),
    }),
    integrationsAzureCreate: build.mutation<
      IntegrationsAzureCreateApiResponse,
      IntegrationsAzureCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/azure/`,
        method: "POST",
        body: queryArg.azure,
      }),
    }),
    integrationsDebugCreate: build.mutation<
      IntegrationsDebugCreateApiResponse,
      IntegrationsDebugCreateApiArg
    >({
      query: () => ({ url: `/integrations/debug`, method: "POST" }),
    }),
    integrationsGithubCreate: build.mutation<
      IntegrationsGithubCreateApiResponse,
      IntegrationsGithubCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/github/`,
        method: "POST",
        body: queryArg.gitHub,
      }),
    }),
    integrationsGsuiteCreate: build.mutation<
      IntegrationsGsuiteCreateApiResponse,
      IntegrationsGsuiteCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/gsuite/`,
        method: "POST",
        body: queryArg.gSuite,
      }),
    }),
    getIntegrationsIntegrationListCompany: build.query<
      GetIntegrationsIntegrationListCompanyApiResponse,
      GetIntegrationsIntegrationListCompanyApiArg
    >({
      query: () => ({ url: `/integrations/integration-list-company/` }),
    }),
    getIntegrationsIntegrationList: build.query<
      GetIntegrationsIntegrationListApiResponse,
      GetIntegrationsIntegrationListApiArg
    >({
      query: () => ({ url: `/integrations/integration-list/` }),
    }),
    postIntegrationsIntegrationList: build.mutation<
      PostIntegrationsIntegrationListApiResponse,
      PostIntegrationsIntegrationListApiArg
    >({
      query: () => ({ url: `/integrations/integration-list/`, method: "POST" }),
    }),
    integrationsJiraCreate: build.mutation<
      IntegrationsJiraCreateApiResponse,
      IntegrationsJiraCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/jira/`,
        method: "POST",
        body: queryArg.jira,
      }),
    }),
    integrationsOffice365Create: build.mutation<
      IntegrationsOffice365CreateApiResponse,
      IntegrationsOffice365CreateApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/office365/`,
        method: "POST",
        body: queryArg.office365,
      }),
    }),
    integrationsSlackCreate: build.mutation<
      IntegrationsSlackCreateApiResponse,
      IntegrationsSlackCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/integrations/slack/`,
        method: "POST",
        body: queryArg.slack,
      }),
    }),
    integrationsRead: build.query<
      IntegrationsReadApiResponse,
      IntegrationsReadApiArg
    >({
      query: (queryArg) => ({ url: `/integrations/${queryArg.id}/` }),
    }),
    inventoryList: build.query<InventoryListApiResponse, InventoryListApiArg>({
      query: () => ({ url: `/inventory/` }),
    }),
    inventoryUpdate: build.mutation<
      InventoryUpdateApiResponse,
      InventoryUpdateApiArg
    >({
      query: () => ({ url: `/inventory/`, method: "PUT" }),
    }),
    inventoryDelete: build.mutation<
      InventoryDeleteApiResponse,
      InventoryDeleteApiArg
    >({
      query: () => ({ url: `/inventory/`, method: "DELETE" }),
    }),
    inventoryInventoryDetailRead: build.query<
      InventoryInventoryDetailReadApiResponse,
      InventoryInventoryDetailReadApiArg
    >({
      query: (queryArg) => ({
        url: `/inventory/inventory_detail/${queryArg.id}/`,
      }),
    }),
    inventoryInventoryDetailPartialUpdate: build.mutation<
      InventoryInventoryDetailPartialUpdateApiResponse,
      InventoryInventoryDetailPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/inventory/inventory_detail/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.inventoryDetail,
      }),
    }),
    paymentsCheckoutCreate: build.mutation<
      PaymentsCheckoutCreateApiResponse,
      PaymentsCheckoutCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/payments/checkout/`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postPaymentsCustomerPortal: build.mutation<
      PostPaymentsCustomerPortalApiResponse,
      PostPaymentsCustomerPortalApiArg
    >({
      query: () => ({ url: `/payments/customer-portal/`, method: "POST" }),
    }),
    getPaymentsMySubscriptionItems: build.query<
      GetPaymentsMySubscriptionItemsApiResponse,
      GetPaymentsMySubscriptionItemsApiArg
    >({
      query: () => ({ url: `/payments/my-subscription-items/` }),
    }),
    getPaymentsMySubscription: build.query<
      GetPaymentsMySubscriptionApiResponse,
      GetPaymentsMySubscriptionApiArg
    >({
      query: () => ({ url: `/payments/my-subscription/` }),
    }),
    getPaymentsSubscribableProduct: build.query<
      GetPaymentsSubscribableProductApiResponse,
      GetPaymentsSubscribableProductApiArg
    >({
      query: () => ({ url: `/payments/subscribable-product/` }),
    }),
    questionsAnswerCreate: build.mutation<
      QuestionsAnswerCreateApiResponse,
      QuestionsAnswerCreateApiArg
    >({
      query: () => ({ url: `/questions/answer/`, method: "POST" }),
    }),
    questionsCompanyPolicyTemplatesList: build.query<
      QuestionsCompanyPolicyTemplatesListApiResponse,
      QuestionsCompanyPolicyTemplatesListApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/company_policy_templates/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    questionsCompanyPolicyTemplatesRetrieveTopicTemplate: build.query<
      QuestionsCompanyPolicyTemplatesRetrieveTopicTemplateApiResponse,
      QuestionsCompanyPolicyTemplatesRetrieveTopicTemplateApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/company_policy_templates/topic/${queryArg.tpk}/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    questionsCompanyPolicyTemplatesRead: build.query<
      QuestionsCompanyPolicyTemplatesReadApiResponse,
      QuestionsCompanyPolicyTemplatesReadApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/company_policy_templates/${queryArg.id}/`,
      }),
    }),
    questionsCompanyPolicyTemplatesUpdate: build.mutation<
      QuestionsCompanyPolicyTemplatesUpdateApiResponse,
      QuestionsCompanyPolicyTemplatesUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/company_policy_templates/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.companyPolicyTemplate,
      }),
    }),
    questionsCompanyPolicyTemplatesPartialUpdate: build.mutation<
      QuestionsCompanyPolicyTemplatesPartialUpdateApiResponse,
      QuestionsCompanyPolicyTemplatesPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/company_policy_templates/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.companyPolicyTemplate,
      }),
    }),
    questionsEmployeeTopicsList: build.query<
      QuestionsEmployeeTopicsListApiResponse,
      QuestionsEmployeeTopicsListApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/employee_topics/`,
        params: { topic_type: queryArg.topicType },
      }),
    }),
    questionsEmployeeTopicsRead: build.query<
      QuestionsEmployeeTopicsReadApiResponse,
      QuestionsEmployeeTopicsReadApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/employee_topics/${queryArg.id}/`,
      }),
    }),
    questionsTestMigrationCreate: build.mutation<
      QuestionsTestMigrationCreateApiResponse,
      QuestionsTestMigrationCreateApiArg
    >({
      query: () => ({ url: `/questions/test_migration/`, method: "POST" }),
    }),
    questionsTopicsList: build.query<
      QuestionsTopicsListApiResponse,
      QuestionsTopicsListApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/topics/`,
        params: { topic_type: queryArg.topicType },
      }),
    }),
    questionsTopicsRead: build.query<
      QuestionsTopicsReadApiResponse,
      QuestionsTopicsReadApiArg
    >({
      query: (queryArg) => ({ url: `/questions/topics/${queryArg.id}/` }),
    }),
    questionsTopicsIconList: build.query<
      QuestionsTopicsIconListApiResponse,
      QuestionsTopicsIconListApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/topics/${queryArg.topicId}/icon`,
      }),
    }),
    questionsTopicsQuestionsAnswersFileAnswerList: build.query<
      QuestionsTopicsQuestionsAnswersFileAnswerListApiResponse,
      QuestionsTopicsQuestionsAnswersFileAnswerListApiArg
    >({
      query: (queryArg) => ({
        url: `/questions/topics/${queryArg.topicId}/questions/${queryArg.questionId}/answers/${queryArg.answerId}/file_answer`,
      }),
    }),
    reportsList: build.query<ReportsListApiResponse, ReportsListApiArg>({
      query: (queryArg) => ({
        url: `/reports/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    reportsCreate: build.mutation<
      ReportsCreateApiResponse,
      ReportsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/reports/`,
        method: "POST",
        body: queryArg.report,
      }),
    }),
    reportsDelete: build.mutation<
      ReportsDeleteApiResponse,
      ReportsDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/reports/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    postRiskManagementRiskCalculator: build.mutation<
      PostRiskManagementRiskCalculatorApiResponse,
      PostRiskManagementRiskCalculatorApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-calculator/`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getRiskManagementRiskCategories: build.query<
      GetRiskManagementRiskCategoriesApiResponse,
      GetRiskManagementRiskCategoriesApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-categories/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    postRiskManagementRiskCategories: build.mutation<
      PostRiskManagementRiskCategoriesApiResponse,
      PostRiskManagementRiskCategoriesApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-categories/`,
        method: "POST",
        body: queryArg.riskCategory,
      }),
    }),
    getRiskManagementRiskDistribution: build.query<
      GetRiskManagementRiskDistributionApiResponse,
      GetRiskManagementRiskDistributionApiArg
    >({
      query: () => ({ url: `/risk_management/risk-distribution/` }),
    }),
    getRiskManagementRiskLibraries: build.query<
      GetRiskManagementRiskLibrariesApiResponse,
      GetRiskManagementRiskLibrariesApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-libraries/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    postRiskManagementRiskLibraries: build.mutation<
      PostRiskManagementRiskLibrariesApiResponse,
      PostRiskManagementRiskLibrariesApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-libraries/`,
        method: "POST",
        body: queryArg.riskLibrary,
      }),
    }),
    getRiskManagementRiskScenarios: build.query<
      GetRiskManagementRiskScenariosApiResponse,
      GetRiskManagementRiskScenariosApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    postRiskManagementRiskScenarios: build.mutation<
      PostRiskManagementRiskScenariosApiResponse,
      PostRiskManagementRiskScenariosApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/`,
        method: "POST",
        body: queryArg.riskScenario,
      }),
    }),
    deleteRiskManagementRiskScenariosRemoveLibraryByLibraryId: build.mutation<
      DeleteRiskManagementRiskScenariosRemoveLibraryByLibraryIdApiResponse,
      DeleteRiskManagementRiskScenariosRemoveLibraryByLibraryIdApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/remove-library/${queryArg.libraryId}/`,
        method: "DELETE",
      }),
    }),
    getRiskManagementRiskScenariosById: build.query<
      GetRiskManagementRiskScenariosByIdApiResponse,
      GetRiskManagementRiskScenariosByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/`,
      }),
    }),
    putRiskManagementRiskScenariosById: build.mutation<
      PutRiskManagementRiskScenariosByIdApiResponse,
      PutRiskManagementRiskScenariosByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.riskTreatmentPlan,
      }),
    }),
    patchRiskManagementRiskScenariosById: build.mutation<
      PatchRiskManagementRiskScenariosByIdApiResponse,
      PatchRiskManagementRiskScenariosByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.riskTreatmentPlan,
      }),
    }),
    getRiskManagementRiskScenariosByIdResidualScore: build.query<
      GetRiskManagementRiskScenariosByIdResidualScoreApiResponse,
      GetRiskManagementRiskScenariosByIdResidualScoreApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/residual-score/`,
      }),
    }),
    putRiskManagementRiskScenariosByIdResidualScore: build.mutation<
      PutRiskManagementRiskScenariosByIdResidualScoreApiResponse,
      PutRiskManagementRiskScenariosByIdResidualScoreApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/residual-score/`,
        method: "PUT",
        body: queryArg.riskResidualScore,
      }),
    }),
    patchRiskManagementRiskScenariosByIdResidualScore: build.mutation<
      PatchRiskManagementRiskScenariosByIdResidualScoreApiResponse,
      PatchRiskManagementRiskScenariosByIdResidualScoreApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/residual-score/`,
        method: "PATCH",
        body: queryArg.riskResidualScore,
      }),
    }),
    getRiskManagementRiskScenariosByIdReview: build.query<
      GetRiskManagementRiskScenariosByIdReviewApiResponse,
      GetRiskManagementRiskScenariosByIdReviewApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/review/`,
      }),
    }),
    putRiskManagementRiskScenariosByIdReview: build.mutation<
      PutRiskManagementRiskScenariosByIdReviewApiResponse,
      PutRiskManagementRiskScenariosByIdReviewApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/review/`,
        method: "PUT",
        body: queryArg.riskReview,
      }),
    }),
    patchRiskManagementRiskScenariosByIdReview: build.mutation<
      PatchRiskManagementRiskScenariosByIdReviewApiResponse,
      PatchRiskManagementRiskScenariosByIdReviewApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.id}/review/`,
        method: "PATCH",
        body: queryArg.riskReview,
      }),
    }),
    postRiskManagementRiskScenariosByRiskScenarioIdResidualScores:
      build.mutation<
        PostRiskManagementRiskScenariosByRiskScenarioIdResidualScoresApiResponse,
        PostRiskManagementRiskScenariosByRiskScenarioIdResidualScoresApiArg
      >({
        query: (queryArg) => ({
          url: `/risk_management/risk-scenarios/${queryArg.riskScenarioId}/residual-scores/`,
          method: "POST",
          body: queryArg.riskResidualScore,
        }),
      }),
    postRiskManagementRiskScenariosByRiskScenarioIdReviews: build.mutation<
      PostRiskManagementRiskScenariosByRiskScenarioIdReviewsApiResponse,
      PostRiskManagementRiskScenariosByRiskScenarioIdReviewsApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_management/risk-scenarios/${queryArg.riskScenarioId}/reviews/`,
        method: "POST",
        body: queryArg.riskReview,
      }),
    }),
    tasksComplianceAllTestList: build.query<
      TasksComplianceAllTestListApiResponse,
      TasksComplianceAllTestListApiArg
    >({
      query: (queryArg) => ({
        url: `/tasks/compliance/all_test/`,
        params: {
          result: queryArg.result,
          category: queryArg.category,
          type: queryArg["type"],
          id: queryArg.id,
        },
      }),
    }),
    tasksComplianceAwsDetailRead: build.query<
      TasksComplianceAwsDetailReadApiResponse,
      TasksComplianceAwsDetailReadApiArg
    >({
      query: (queryArg) => ({
        url: `/tasks/compliance/aws/detail/${queryArg.id}/`,
      }),
    }),
    tasksComplianceGithubDetailRead: build.query<
      TasksComplianceGithubDetailReadApiResponse,
      TasksComplianceGithubDetailReadApiArg
    >({
      query: (queryArg) => ({
        url: `/tasks/compliance/github/detail/${queryArg.id}/`,
      }),
    }),
    tasksScanAwsCreate: build.mutation<
      TasksScanAwsCreateApiResponse,
      TasksScanAwsCreateApiArg
    >({
      query: () => ({ url: `/tasks/scan_aws/`, method: "POST" }),
    }),
    tasksScanAzureCreate: build.mutation<
      TasksScanAzureCreateApiResponse,
      TasksScanAzureCreateApiArg
    >({
      query: () => ({ url: `/tasks/scan_azure/`, method: "POST" }),
    }),
    tasksScanDocumentList: build.query<
      TasksScanDocumentListApiResponse,
      TasksScanDocumentListApiArg
    >({
      query: () => ({ url: `/tasks/scan_document/` }),
    }),
    tasksScanDocumentCreate: build.mutation<
      TasksScanDocumentCreateApiResponse,
      TasksScanDocumentCreateApiArg
    >({
      query: () => ({ url: `/tasks/scan_document/`, method: "POST" }),
    }),
    tasksScanGithubList: build.query<
      TasksScanGithubListApiResponse,
      TasksScanGithubListApiArg
    >({
      query: () => ({ url: `/tasks/scan_github/` }),
    }),
    tasksScanGithubCreate: build.mutation<
      TasksScanGithubCreateApiResponse,
      TasksScanGithubCreateApiArg
    >({
      query: () => ({ url: `/tasks/scan_github/`, method: "POST" }),
    }),
    tasksScanStatusCreate: build.mutation<
      TasksScanStatusCreateApiResponse,
      TasksScanStatusCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/tasks/scan_status/`,
        method: "POST",
        body: queryArg.integrationScanStatus,
      }),
    }),
    getTasksTodoTaskFilter: build.query<
      GetTasksTodoTaskFilterApiResponse,
      GetTasksTodoTaskFilterApiArg
    >({
      query: (queryArg) => ({
        url: `/tasks/todo-task-filter/`,
        params: { id: queryArg.id },
      }),
    }),
    getTasksTodoTaskList: build.query<
      GetTasksTodoTaskListApiResponse,
      GetTasksTodoTaskListApiArg
    >({
      query: () => ({ url: `/tasks/todo-task-list/` }),
    }),
    trustReportsCreate: build.mutation<
      TrustReportsCreateApiResponse,
      TrustReportsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/trust_reports/`,
        method: "POST",
        body: queryArg.trustReport,
      }),
    }),
    trustReportsGetAllControls: build.query<
      TrustReportsGetAllControlsApiResponse,
      TrustReportsGetAllControlsApiArg
    >({
      query: (queryArg) => ({
        url: `/trust_reports/get_all_controls/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    trustReportsGetAllDocuments: build.query<
      TrustReportsGetAllDocumentsApiResponse,
      TrustReportsGetAllDocumentsApiArg
    >({
      query: (queryArg) => ({
        url: `/trust_reports/get_all_documents/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    trustReportsGetDetail: build.query<
      TrustReportsGetDetailApiResponse,
      TrustReportsGetDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/trust_reports/get_detail/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    trustReportsGrantAccess: build.mutation<
      TrustReportsGrantAccessApiResponse,
      TrustReportsGrantAccessApiArg
    >({
      query: (queryArg) => ({
        url: `/trust_reports/grant_access/`,
        method: "POST",
        body: queryArg.trustReport,
      }),
    }),
    trustReportsRequestAccessDocument: build.mutation<
      TrustReportsRequestAccessDocumentApiResponse,
      TrustReportsRequestAccessDocumentApiArg
    >({
      query: (queryArg) => ({
        url: `/trust_reports/request_access_document/`,
        method: "POST",
        body: queryArg.trustReport,
      }),
    }),
    postVendorsVendorCompanyCreate: build.mutation<
      PostVendorsVendorCompanyCreateApiResponse,
      PostVendorsVendorCompanyCreateApiArg
    >({
      query: () => ({ url: `/vendors/vendor-company-create/`, method: "POST" }),
    }),
    getVendorsVendorCompanyList: build.query<
      GetVendorsVendorCompanyListApiResponse,
      GetVendorsVendorCompanyListApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-company-list/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    postVendorsVendorContactInfo: build.mutation<
      PostVendorsVendorContactInfoApiResponse,
      PostVendorsVendorContactInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-contact-info/`,
        method: "POST",
        body: queryArg.vendorContactInfo,
      }),
    }),
    getVendorsVendorContactInfoById: build.query<
      GetVendorsVendorContactInfoByIdApiResponse,
      GetVendorsVendorContactInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-contact-info/${queryArg.id}/`,
      }),
    }),
    putVendorsVendorContactInfoById: build.mutation<
      PutVendorsVendorContactInfoByIdApiResponse,
      PutVendorsVendorContactInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-contact-info/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.vendorContactInfo,
      }),
    }),
    patchVendorsVendorContactInfoById: build.mutation<
      PatchVendorsVendorContactInfoByIdApiResponse,
      PatchVendorsVendorContactInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-contact-info/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.vendorContactInfo,
      }),
    }),
    postVendorsVendorReference: build.mutation<
      PostVendorsVendorReferenceApiResponse,
      PostVendorsVendorReferenceApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-reference/`,
        method: "POST",
        body: queryArg.vendorReference,
      }),
    }),
    getVendorsVendorReferenceById: build.query<
      GetVendorsVendorReferenceByIdApiResponse,
      GetVendorsVendorReferenceByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-reference/${queryArg.id}/`,
      }),
    }),
    putVendorsVendorReferenceById: build.mutation<
      PutVendorsVendorReferenceByIdApiResponse,
      PutVendorsVendorReferenceByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-reference/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.vendorReference,
      }),
    }),
    patchVendorsVendorReferenceById: build.mutation<
      PatchVendorsVendorReferenceByIdApiResponse,
      PatchVendorsVendorReferenceByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-reference/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.vendorReference,
      }),
    }),
    postVendorsVendorRiskManagement: build.mutation<
      PostVendorsVendorRiskManagementApiResponse,
      PostVendorsVendorRiskManagementApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-risk-management/`,
        method: "POST",
        body: queryArg.vendorRiskManagement,
      }),
    }),
    getVendorsVendorRiskManagementById: build.query<
      GetVendorsVendorRiskManagementByIdApiResponse,
      GetVendorsVendorRiskManagementByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-risk-management/${queryArg.id}/`,
      }),
    }),
    putVendorsVendorRiskManagementById: build.mutation<
      PutVendorsVendorRiskManagementByIdApiResponse,
      PutVendorsVendorRiskManagementByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-risk-management/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.vendorRiskManagement,
      }),
    }),
    patchVendorsVendorRiskManagementById: build.mutation<
      PatchVendorsVendorRiskManagementByIdApiResponse,
      PatchVendorsVendorRiskManagementByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-risk-management/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.vendorRiskManagement,
      }),
    }),
    postVendorsVendorSecurityReview: build.mutation<
      PostVendorsVendorSecurityReviewApiResponse,
      PostVendorsVendorSecurityReviewApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-security-review/`,
        method: "POST",
        body: queryArg.vendorSecurityReview,
      }),
    }),
    getVendorsVendorSecurityReviewById: build.query<
      GetVendorsVendorSecurityReviewByIdApiResponse,
      GetVendorsVendorSecurityReviewByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-security-review/${queryArg.id}/`,
      }),
    }),
    putVendorsVendorSecurityReviewById: build.mutation<
      PutVendorsVendorSecurityReviewByIdApiResponse,
      PutVendorsVendorSecurityReviewByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-security-review/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.vendorSecurityReview,
      }),
    }),
    patchVendorsVendorSecurityReviewById: build.mutation<
      PatchVendorsVendorSecurityReviewByIdApiResponse,
      PatchVendorsVendorSecurityReviewByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendor-security-review/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.vendorSecurityReview,
      }),
    }),
    vendorsVendorsList: build.query<
      VendorsVendorsListApiResponse,
      VendorsVendorsListApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendors/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    vendorsVendorsCreate: build.mutation<
      VendorsVendorsCreateApiResponse,
      VendorsVendorsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendors/`,
        method: "POST",
        body: queryArg.vendorCreate,
      }),
    }),
    vendorsVendorsRead: build.query<
      VendorsVendorsReadApiResponse,
      VendorsVendorsReadApiArg
    >({
      query: (queryArg) => ({ url: `/vendors/vendors/${queryArg.id}/` }),
    }),
    vendorsVendorsUpdate: build.mutation<
      VendorsVendorsUpdateApiResponse,
      VendorsVendorsUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendors/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.vendor,
      }),
    }),
    vendorsVendorsPartialUpdate: build.mutation<
      VendorsVendorsPartialUpdateApiResponse,
      VendorsVendorsPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendors/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.vendor,
      }),
    }),
    vendorsVendorsDelete: build.mutation<
      VendorsVendorsDeleteApiResponse,
      VendorsVendorsDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/vendors/vendors/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    vulnerabilityList: build.query<
      VulnerabilityListApiResponse,
      VulnerabilityListApiArg
    >({
      query: () => ({ url: `/vulnerability/` }),
    }),
    vulnerabilityCreate: build.mutation<
      VulnerabilityCreateApiResponse,
      VulnerabilityCreateApiArg
    >({
      query: () => ({ url: `/vulnerability/`, method: "POST" }),
    }),
  }),
  overrideExisting: false,
}).enhanceEndpoints(
  //@ts-ignore
  enhanceEndpoints 
  );
export { injectedRtkApi as vistarEndpoints };
export type GetAccessAccessReviewDetailByIdApiResponse =
  /** status 200  */ AccessReviewVendorRead;
export type GetAccessAccessReviewDetailByIdApiArg = {
  /** A UUID string identifying this access review_ vendor. */
  id: string;
};
export type PutAccessAccessReviewDetailByIdApiResponse =
  /** status 200  */ AccessReviewVendorRead;
export type PutAccessAccessReviewDetailByIdApiArg = {
  /** A UUID string identifying this access review_ vendor. */
  id: string;
  accessReviewVendor: AccessReviewVendor;
};
export type PatchAccessAccessReviewDetailByIdApiResponse =
  /** status 200  */ AccessReviewVendorRead;
export type PatchAccessAccessReviewDetailByIdApiArg = {
  /** A UUID string identifying this access review_ vendor. */
  id: string;
  accessReviewVendor: Partial<AccessReviewVendor>;
};
export type DeleteAccessAccessReviewDetailByIdApiResponse = unknown;
export type DeleteAccessAccessReviewDetailByIdApiArg = {
  /** A UUID string identifying this access review_ vendor. */
  id: string;
};
export type GetAccessAccessReviewsApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: AccessReviewRead[];
};
export type GetAccessAccessReviewsApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type PostAccessAccessReviewsApiResponse =
  /** status 201  */ AccessReviewRead;
export type PostAccessAccessReviewsApiArg = {
  accessReview: AccessReview;
};
export type GetAccessAccessReviewsByIdApiResponse =
  /** status 200  */ AccessReviewRead;
export type GetAccessAccessReviewsByIdApiArg = {
  id: string;
};
export type PutAccessAccessReviewsByIdApiResponse =
  /** status 200  */ AccessReviewRead;
export type PutAccessAccessReviewsByIdApiArg = {
  id: string;
  accessReview: AccessReview;
};
export type PatchAccessAccessReviewsByIdApiResponse =
  /** status 200  */ AccessReviewRead;
export type PatchAccessAccessReviewsByIdApiArg = {
  id: string;
  accessReview: AccessReview;
};
export type DeleteAccessAccessReviewsByIdApiResponse = unknown;
export type DeleteAccessAccessReviewsByIdApiArg = {
  id: string;
};
export type AccessAccessListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: AccessRead[];
};
export type AccessAccessListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type AccessAccessCreateApiResponse = /** status 201  */ AccessRead;
export type AccessAccessCreateApiArg = {
  access: Access;
};
export type AccessAccessReadApiResponse = unknown;
export type AccessAccessReadApiArg = {
  id: string;
};
export type AccessAccessUpdateApiResponse = /** status 200  */ AccessRead;
export type AccessAccessUpdateApiArg = {
  id: string;
  accessModel: AccessModel;
};
export type AccessAccessDeleteApiResponse = unknown;
export type AccessAccessDeleteApiArg = {
  id: string;
};
export type AccessAccessChangeOwnerPartialUpdateApiResponse = unknown;
export type AccessAccessChangeOwnerPartialUpdateApiArg = {
  id: string;
  body: {
    owner: string;
  };
};
export type AccessAccessScanCreateApiResponse = unknown;
export type AccessAccessScanCreateApiArg = void;
export type GetAccessExportAccessJsonByIdApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: AccessRead[];
};
export type GetAccessExportAccessJsonByIdApiArg = {
  id: string;
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type AccountsApolloListApiResponse =
  /** status 200 Organization data retrieved successfully */ object;
export type AccountsApolloListApiArg = {
  /** Specify the domain to query. If not provided, the user's company name or email domain will be used. */
  domain: string;
};
export type AccountsAuthenticationCodeRequestCreateApiResponse = unknown;
export type AccountsAuthenticationCodeRequestCreateApiArg = void;
export type AccountsAuthenticationLoginCreateApiResponse =
  /** status 200 Login response */ LoginResponse;
export type AccountsAuthenticationLoginCreateApiArg = {
  login: Login;
};
export type AccountsAuthenticationLoginCodeCreateApiResponse = unknown;
export type AccountsAuthenticationLoginCodeCreateApiArg = void;
export type PostAccountsAuthenticationMfaChangePrimaryMethodApiResponse =
  unknown;
export type PostAccountsAuthenticationMfaChangePrimaryMethodApiArg = void;
export type AccountsAuthenticationMfaConfigListApiResponse = unknown;
export type AccountsAuthenticationMfaConfigListApiArg = void;
export type GetAccountsAuthenticationMfaUserActiveMethodsApiResponse =
  /** status 200  */ {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: UserMfaMethod[];
  };
export type GetAccountsAuthenticationMfaUserActiveMethodsApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type AccountsAuthenticationSsoGoogleCreateApiResponse =
  /** status 200 Login response */ LoginResponse;
export type AccountsAuthenticationSsoGoogleCreateApiArg = {
  sso: Sso;
};
export type AccountsAuthenticationSsoMicrosoftCreateApiResponse =
  /** status 200 Login response */ LoginResponse;
export type AccountsAuthenticationSsoMicrosoftCreateApiArg = {
  sso: Sso;
};
export type AccountsAuthenticationActivateCreateApiResponse = unknown;
export type AccountsAuthenticationActivateCreateApiArg = {
  method: string;
};
export type AccountsAuthenticationActivateConfirmCreateApiResponse = unknown;
export type AccountsAuthenticationActivateConfirmCreateApiArg = {
  method: string;
};
export type AccountsAuthenticationCodesRegenerateCreateApiResponse = unknown;
export type AccountsAuthenticationCodesRegenerateCreateApiArg = {
  method: string;
};
export type AccountsAuthenticationDeactivateCreateApiResponse = unknown;
export type AccountsAuthenticationDeactivateCreateApiArg = {
  method: string;
};
export type AccountsCompanyListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: CompanyInfoRead[];
};
export type AccountsCompanyListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type AccountsCompanyReadApiResponse = /** status 200  */ CompanyInfoRead;
export type AccountsCompanyReadApiArg = {
  /** A UUID string identifying this Company. */
  id: string;
};
export type AccountsCompanyUpdateApiResponse =
  /** status 200  */ CompanyInfoRead;
export type AccountsCompanyUpdateApiArg = {
  /** A UUID string identifying this Company. */
  id: string;
  companyInfo: CompanyInfo;
};
export type AccountsCompanyPartialUpdateApiResponse =
  /** status 200  */ CompanyInfoRead;
export type AccountsCompanyPartialUpdateApiArg = {
  /** A UUID string identifying this Company. */
  id: string;
  companyInfo: CompanyInfo;
};
export type AccountsComplianceManagerListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: ComplianceMangerRead[];
};
export type AccountsComplianceManagerListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type AccountsComplianceManagerReadApiResponse =
  /** status 200  */ ComplianceMangerRead;
export type AccountsComplianceManagerReadApiArg = {
  /** A UUID string identifying this compliance manager. */
  id: string;
};
export type AccountsComplianceManagerUpdateApiResponse =
  /** status 200  */ ComplianceMangerRead;
export type AccountsComplianceManagerUpdateApiArg = {
  /** A UUID string identifying this compliance manager. */
  id: string;
  complianceManger: ComplianceManger;
};
export type AccountsComplianceManagerPartialUpdateApiResponse =
  /** status 200  */ ComplianceMangerRead;
export type AccountsComplianceManagerPartialUpdateApiArg = {
  /** A UUID string identifying this compliance manager. */
  id: string;
  complianceManger: ComplianceManger;
};
export type AccountsCurrentUserListApiResponse =
  /** status 200 Login response */ UserRead;
export type AccountsCurrentUserListApiArg = void;
export type AccountsCustomVerificationEmailSentListApiResponse = unknown;
export type AccountsCustomVerificationEmailSentListApiArg = {
  email: string;
};
export type AccountsPasswordResetCreateApiResponse = /** status 201  */ Email;
export type AccountsPasswordResetCreateApiArg = {
  email: Email;
};
export type AccountsPasswordResetConfirmCreateApiResponse =
  /** status 201  */ PasswordToken;
export type AccountsPasswordResetConfirmCreateApiArg = {
  passwordToken: PasswordToken;
};
export type AccountsPasswordResetValidateTokenCreateApiResponse =
  /** status 201  */ ResetToken;
export type AccountsPasswordResetValidateTokenCreateApiArg = {
  resetToken: ResetToken;
};
export type PostAccountsRestAuthPasswordChangeApiResponse =
  /** status 201  */ PasswordChange;
export type PostAccountsRestAuthPasswordChangeApiArg = {
  passwordChange: PasswordChange;
};
export type PostAccountsRestAuthRegistrationApiResponse =
  /** status 201  */ RestAuthRegister;
export type PostAccountsRestAuthRegistrationApiArg = {
  restAuthRegister: RestAuthRegister;
};
export type PostAccountsRestAuthRegistrationAccountConfirmEmailByKeyApiResponse =
  unknown;
export type PostAccountsRestAuthRegistrationAccountConfirmEmailByKeyApiArg = {
  key: string;
};
export type AccountsTokenRefreshCreateApiResponse =
  /** status 200 Refresh token response */ TokenRefreshResponse;
export type AccountsTokenRefreshCreateApiArg = {
  tokenRefresh: TokenRefresh;
};
export type AccountsTokenVerifyCreateApiResponse =
  /** status 201  */ TokenVerify;
export type AccountsTokenVerifyCreateApiArg = {
  tokenVerify: TokenVerify;
};
export type AccountsUserAuditorListApiResponse = unknown;
export type AccountsUserAuditorListApiArg = void;
export type AccountsUserAuditorCreateApiResponse = unknown;
export type AccountsUserAuditorCreateApiArg = void;
export type AccountsUserAuditorUpdateApiResponse = unknown;
export type AccountsUserAuditorUpdateApiArg = void;
export type ChatbotChatsCreateApiResponse = /** status 200  */ ChatbotResponse;
export type ChatbotChatsCreateApiArg = {
  chatbot: Chatbot;
};
export type ComplianceControlsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: ControlRead[];
};
export type ComplianceControlsListApiArg = {
  search?: string;
  orderBy?: string;
  status?: string;
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type ComplianceControlsRunTestAllApiResponse =
  /** status 201  */ ControlRead;
export type ComplianceControlsRunTestAllApiArg = {
  control: Control;
};
export type ComplianceControlsSummaryListApiResponse = unknown;
export type ComplianceControlsSummaryListApiArg = void;
export type ComplianceControlsReadApiResponse = /** status 200  */ ControlRead;
export type ComplianceControlsReadApiArg = {
  /** A UUID string identifying this control. */
  id: string;
};
export type ComplianceDownloadSlaTestsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: SlaRead[];
};
export type ComplianceDownloadSlaTestsListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type ComplianceDownloadSlaTestsCreateApiResponse =
  /** status 201  */ SlaRead;
export type ComplianceDownloadSlaTestsCreateApiArg = {
  /** Filter SLA results by company name or domain */
  domain?: string;
  sla: Sla;
};
export type ComplianceDownloadSlaTestsReadApiResponse =
  /** status 200  */ SlaRead;
export type ComplianceDownloadSlaTestsReadApiArg = {
  /** A UUID string identifying this sla test. */
  id: string;
};
export type ComplianceFrameworkListApiResponse = unknown;
export type ComplianceFrameworkListApiArg = void;
export type ComplianceHomeSummaryListApiResponse = unknown;
export type ComplianceHomeSummaryListApiArg = void;
export type ComplianceSlaDateEditUpdateApiResponse = /** status 200  */ SlaRead;
export type ComplianceSlaDateEditUpdateApiArg = {
  /** Number of days to add to the current date to get the due date. */
  numberOfDays: number;
  sla: Sla;
};
export type ComplianceSlaDateEditPartialUpdateApiResponse =
  /** status 200  */ SlaRead;
export type ComplianceSlaDateEditPartialUpdateApiArg = {
  sla: Sla;
};
export type ComplianceSlaTestsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: SlaRead[];
};
export type ComplianceSlaTestsListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type ComplianceSlaTestsReadApiResponse = /** status 200  */ SlaRead;
export type ComplianceSlaTestsReadApiArg = {
  /** A UUID string identifying this sla test. */
  id: string;
};
export type ComputersComputersListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: ComputerRead[];
};
export type ComputersComputersListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type ComputersComputersCreateApiResponse =
  /** status 201  */ ComputerRead;
export type ComputersComputersCreateApiArg = {
  computer: Computer;
};
export type ComputersComputersReadApiResponse = /** status 200  */ ComputerRead;
export type ComputersComputersReadApiArg = {
  id: string;
};
export type ComputersComputersPartialUpdateApiResponse =
  /** status 200  */ ComputerRead;
export type ComputersComputersPartialUpdateApiArg = {
  id: string;
  computer: Computer;
};
export type ComputersComputersDeleteApiResponse = unknown;
export type ComputersComputersDeleteApiArg = {
  id: string;
};
export type ComputersOsqueryLogDataCreateApiResponse = unknown;
export type ComputersOsqueryLogDataCreateApiArg = void;
export type DocumentsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: DocumentRead[];
};
export type DocumentsListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type DocumentsCreateApiResponse = /** status 201  */ DocumentRead;
export type DocumentsCreateApiArg = {
  document: Document;
};
export type DocumentsGetDocumentTypesApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: DocumentRead[];
};
export type DocumentsGetDocumentTypesApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type DocumentsDeleteApiResponse = unknown;
export type DocumentsDeleteApiArg = {
  /** A UUID string identifying this document. */
  id: string;
};
export type EmployeesListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: EmployeeRead[];
};
export type EmployeesListApiArg = {
  employmentType?: string;
  office365Mfa?: string;
  gsuiteMfa?: string;
  slackMfa?: string;
  backgroundChecked?: string;
  acceptedPolicies?: string;
  securityTraining?: string;
  search?: string;
  orderBy?: string;
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type EmployeesCreateApiResponse = /** status 201  */ EmployeeRead;
export type EmployeesCreateApiArg = {
  employee: Employee;
};
export type EmployeesPostApiResponse = /** status 201  */ EmployeeRead;
export type EmployeesPostApiArg = {
  employee: Employee;
};
export type EmployeesCurrentEmployeeReadApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: EmployeeRead[];
};
export type EmployeesCurrentEmployeeReadApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type EmployeesEmployeeMdmListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: EmployeeMdmRead[];
};
export type EmployeesEmployeeMdmListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type EmployeesEmployeeMdmCreateApiResponse =
  /** status 201  */ EmployeeMdmRead;
export type EmployeesEmployeeMdmCreateApiArg = {
  employeeMdm: EmployeeMdm;
};
export type EmployeesEmploymentAccessReadApiResponse = unknown;
export type EmployeesEmploymentAccessReadApiArg = {
  id: string;
};
export type EmployeesEmploymentTypeCreateApiResponse =
  /** status 200 Employee Update Response */ EmployeeUpdateResponse;
export type EmployeesEmploymentTypeCreateApiArg = {
  employeeEmploymentTypeUpdate: EmployeeEmploymentTypeUpdate;
};
export type EmployeesMergeCreateApiResponse =
  /** status 200 Employee Merge Response */ EmployeeUpdateResponse;
export type EmployeesMergeCreateApiArg = {
  employeeMerge: EmployeeMerge;
};
export type EmployeesPutApiResponse = /** status 200  */ EmployeeRead;
export type EmployeesPutApiArg = {
  /** A UUID string identifying this employee. */
  id: string;
  employee: Employee;
};
export type IntegrationsListApiResponse = /** status 200  */ IntegrationRead[];
export type IntegrationsListApiArg = {
  templateName?: string;
};
export type IntegrationsAwsCreateApiResponse =
  /** status 201 Integration response */ IntegrationRead;
export type IntegrationsAwsCreateApiArg = {
  aws: Aws;
};
export type IntegrationsAwscloudfListApiResponse = unknown;
export type IntegrationsAwscloudfListApiArg = void;
export type IntegrationsAwscloudfCreateApiResponse =
  /** status 201 Integration response */ IntegrationRead;
export type IntegrationsAwscloudfCreateApiArg = {
  awsSerializerCloudFormation: AwsSerializerCloudFormation;
};
export type IntegrationsAzureCreateApiResponse =
  /** status 201 Integration response */ IntegrationRead;
export type IntegrationsAzureCreateApiArg = {
  azure: Azure;
};
export type IntegrationsDebugCreateApiResponse = unknown;
export type IntegrationsDebugCreateApiArg = void;
export type IntegrationsGithubCreateApiResponse =
  /** status 201 Integration response */ IntegrationRead;
export type IntegrationsGithubCreateApiArg = {
  gitHub: GitHub;
};
export type IntegrationsGsuiteCreateApiResponse =
  /** status 201 Integration response */ IntegrationRead;
export type IntegrationsGsuiteCreateApiArg = {
  gSuite: GSuite;
};
export type GetIntegrationsIntegrationListCompanyApiResponse = unknown;
export type GetIntegrationsIntegrationListCompanyApiArg = void;
export type GetIntegrationsIntegrationListApiResponse = unknown;
export type GetIntegrationsIntegrationListApiArg = void;
export type PostIntegrationsIntegrationListApiResponse = unknown;
export type PostIntegrationsIntegrationListApiArg = void;
export type IntegrationsJiraCreateApiResponse =
  /** status 201 Integration response */ IntegrationRead;
export type IntegrationsJiraCreateApiArg = {
  jira: Jira;
};
export type IntegrationsOffice365CreateApiResponse =
  /** status 201 Integration response */ IntegrationRead;
export type IntegrationsOffice365CreateApiArg = {
  office365: Office365;
};
export type IntegrationsSlackCreateApiResponse =
  /** status 201 Integration response */ IntegrationRead;
export type IntegrationsSlackCreateApiArg = {
  slack: Slack;
};
export type IntegrationsReadApiResponse = /** status 200  */ IntegrationRead;
export type IntegrationsReadApiArg = {
  /** A UUID string identifying this integration. */
  id: string;
};
export type InventoryListApiResponse = unknown;
export type InventoryListApiArg = void;
export type InventoryUpdateApiResponse = unknown;
export type InventoryUpdateApiArg = void;
export type InventoryDeleteApiResponse = unknown;
export type InventoryDeleteApiArg = void;
export type InventoryInventoryDetailReadApiResponse =
  /** status 200  */ InventoryDetailRead;
export type InventoryInventoryDetailReadApiArg = {
  /** A unique integer value identifying this inventory detail. */
  id: number;
};
export type InventoryInventoryDetailPartialUpdateApiResponse =
  /** status 200  */ InventoryDetailRead;
export type InventoryInventoryDetailPartialUpdateApiArg = {
  /** A unique integer value identifying this inventory detail. */
  id: number;
  inventoryDetail: InventoryDetail;
};
export type PaymentsCheckoutCreateApiResponse = unknown;
export type PaymentsCheckoutCreateApiArg = {
  body: {
    price_id: string;
  };
};
export type PostPaymentsCustomerPortalApiResponse = unknown;
export type PostPaymentsCustomerPortalApiArg = void;
export type GetPaymentsMySubscriptionItemsApiResponse =
  /** status 200  */ SubscriptionItemRead[];
export type GetPaymentsMySubscriptionItemsApiArg = void;
export type GetPaymentsMySubscriptionApiResponse =
  /** status 200  */ Subscription[];
export type GetPaymentsMySubscriptionApiArg = void;
export type GetPaymentsSubscribableProductApiResponse =
  /** status 200  */ Price[];
export type GetPaymentsSubscribableProductApiArg = void;
export type QuestionsAnswerCreateApiResponse = unknown;
export type QuestionsAnswerCreateApiArg = void;
export type QuestionsCompanyPolicyTemplatesListApiResponse =
  /** status 200  */ {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: CompanyPolicyTemplateRead[];
  };
export type QuestionsCompanyPolicyTemplatesListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type QuestionsCompanyPolicyTemplatesRetrieveTopicTemplateApiResponse =
  /** status 200  */ {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: CompanyPolicyTemplateRead[];
  };
export type QuestionsCompanyPolicyTemplatesRetrieveTopicTemplateApiArg = {
  tpk: string;
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type QuestionsCompanyPolicyTemplatesReadApiResponse =
  /** status 200  */ CompanyPolicyTemplateRead;
export type QuestionsCompanyPolicyTemplatesReadApiArg = {
  /** A UUID string identifying this company policy template. */
  id: string;
};
export type QuestionsCompanyPolicyTemplatesUpdateApiResponse =
  /** status 200  */ CompanyPolicyTemplateRead;
export type QuestionsCompanyPolicyTemplatesUpdateApiArg = {
  /** A UUID string identifying this company policy template. */
  id: string;
  companyPolicyTemplate: CompanyPolicyTemplate;
};
export type QuestionsCompanyPolicyTemplatesPartialUpdateApiResponse =
  /** status 200  */ CompanyPolicyTemplateRead;
export type QuestionsCompanyPolicyTemplatesPartialUpdateApiArg = {
  /** A UUID string identifying this company policy template. */
  id: string;
  companyPolicyTemplate: CompanyPolicyTemplate;
};
export type QuestionsEmployeeTopicsListApiResponse =
  /** status 200  */ TopicRead[];
export type QuestionsEmployeeTopicsListApiArg = {
  topicType?: string;
};
export type QuestionsEmployeeTopicsReadApiResponse =
  /** status 200  */ TopicRead;
export type QuestionsEmployeeTopicsReadApiArg = {
  /** A UUID string identifying this topic. */
  id: string;
};
export type QuestionsTestMigrationCreateApiResponse = unknown;
export type QuestionsTestMigrationCreateApiArg = void;
export type QuestionsTopicsListApiResponse = /** status 200  */ TopicRead[];
export type QuestionsTopicsListApiArg = {
  topicType?: string;
};
export type QuestionsTopicsReadApiResponse = /** status 200  */ TopicRead;
export type QuestionsTopicsReadApiArg = {
  /** A UUID string identifying this topic. */
  id: string;
};
export type QuestionsTopicsIconListApiResponse = unknown;
export type QuestionsTopicsIconListApiArg = {
  topicId: string;
};
export type QuestionsTopicsQuestionsAnswersFileAnswerListApiResponse = unknown;
export type QuestionsTopicsQuestionsAnswersFileAnswerListApiArg = {
  answerId: string;
  questionId: string;
  topicId: string;
};
export type ReportsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: ReportRead[];
};
export type ReportsListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type ReportsCreateApiResponse = /** status 201  */ ReportRead;
export type ReportsCreateApiArg = {
  report: Report;
};
export type ReportsDeleteApiResponse = unknown;
export type ReportsDeleteApiArg = {
  /** A UUID string identifying this report. */
  id: string;
};
export type PostRiskManagementRiskCalculatorApiResponse = unknown;
export type PostRiskManagementRiskCalculatorApiArg = {
  body: {
    NumberOfEmployees: number;
    NumberOfRecords: number;
    Revenue: number;
  };
};
export type GetRiskManagementRiskCategoriesApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: RiskCategoryRead[];
};
export type GetRiskManagementRiskCategoriesApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type PostRiskManagementRiskCategoriesApiResponse =
  /** status 201  */ RiskCategoryRead;
export type PostRiskManagementRiskCategoriesApiArg = {
  riskCategory: RiskCategory;
};
export type GetRiskManagementRiskDistributionApiResponse = unknown;
export type GetRiskManagementRiskDistributionApiArg = void;
export type GetRiskManagementRiskLibrariesApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: RiskLibraryRead[];
};
export type GetRiskManagementRiskLibrariesApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type PostRiskManagementRiskLibrariesApiResponse =
  /** status 201  */ RiskLibraryRead;
export type PostRiskManagementRiskLibrariesApiArg = {
  riskLibrary: RiskLibrary;
};
export type GetRiskManagementRiskScenariosApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: RiskScenarioRead[];
};
export type GetRiskManagementRiskScenariosApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type PostRiskManagementRiskScenariosApiResponse =
  /** status 201  */ RiskScenarioRead;
export type PostRiskManagementRiskScenariosApiArg = {
  riskScenario: RiskScenario;
};
export type DeleteRiskManagementRiskScenariosRemoveLibraryByLibraryIdApiResponse =
  unknown;
export type DeleteRiskManagementRiskScenariosRemoveLibraryByLibraryIdApiArg = {
  libraryId: string;
};
export type GetRiskManagementRiskScenariosByIdApiResponse =
  /** status 200  */ RiskTreatmentPlanRead;
export type GetRiskManagementRiskScenariosByIdApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
};
export type PutRiskManagementRiskScenariosByIdApiResponse =
  /** status 200  */ RiskTreatmentPlanRead;
export type PutRiskManagementRiskScenariosByIdApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
  riskTreatmentPlan: RiskTreatmentPlan;
};
export type PatchRiskManagementRiskScenariosByIdApiResponse =
  /** status 200  */ RiskTreatmentPlanRead;
export type PatchRiskManagementRiskScenariosByIdApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
  riskTreatmentPlan: RiskTreatmentPlan;
};
export type GetRiskManagementRiskScenariosByIdResidualScoreApiResponse =
  /** status 200  */ RiskResidualScoreRead;
export type GetRiskManagementRiskScenariosByIdResidualScoreApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
};
export type PutRiskManagementRiskScenariosByIdResidualScoreApiResponse =
  /** status 200  */ RiskResidualScoreRead;
export type PutRiskManagementRiskScenariosByIdResidualScoreApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
  riskResidualScore: RiskResidualScore;
};
export type PatchRiskManagementRiskScenariosByIdResidualScoreApiResponse =
  /** status 200  */ RiskResidualScoreRead;
export type PatchRiskManagementRiskScenariosByIdResidualScoreApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
  riskResidualScore: RiskResidualScore;
};
export type GetRiskManagementRiskScenariosByIdReviewApiResponse =
  /** status 200  */ RiskReviewRead;
export type GetRiskManagementRiskScenariosByIdReviewApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
};
export type PutRiskManagementRiskScenariosByIdReviewApiResponse =
  /** status 200  */ RiskReviewRead;
export type PutRiskManagementRiskScenariosByIdReviewApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
  riskReview: RiskReview;
};
export type PatchRiskManagementRiskScenariosByIdReviewApiResponse =
  /** status 200  */ RiskReviewRead;
export type PatchRiskManagementRiskScenariosByIdReviewApiArg = {
  /** A UUID string identifying this risk scenario. */
  id: string;
  riskReview: RiskReview;
};
export type PostRiskManagementRiskScenariosByRiskScenarioIdResidualScoresApiResponse =
  /** status 201  */ RiskResidualScoreRead;
export type PostRiskManagementRiskScenariosByRiskScenarioIdResidualScoresApiArg =
  {
    riskScenarioId: string;
    riskResidualScore: RiskResidualScore;
  };
export type PostRiskManagementRiskScenariosByRiskScenarioIdReviewsApiResponse =
  /** status 201  */ RiskReviewRead;
export type PostRiskManagementRiskScenariosByRiskScenarioIdReviewsApiArg = {
  riskScenarioId: string;
  riskReview: RiskReview;
};
export type TasksComplianceAllTestListApiResponse =
  /** status 200 Monitored data retrieved successfully */ object;
export type TasksComplianceAllTestListApiArg = {
  /** Specify the result to query. If not provided, default_results = ['Passed', 'Failed'] */
  result?: string;
  /** Specify the category to query. If not provided, default_categories = ['Human Resources','Governance','IT Security', 'IT Operations', 'Documents', 'Risk Management'] */
  category?: string;
  /** Specify the test type to query. If not provided, default_types = ['Policy', 'Document', 'Monitor'] */
  type?: string;
  /** Specify the test id to query. If not provided, example = VOPS1:005 */
  id?: string;
};
export type TasksComplianceAwsDetailReadApiResponse = unknown;
export type TasksComplianceAwsDetailReadApiArg = {
  id: string;
};
export type TasksComplianceGithubDetailReadApiResponse = unknown;
export type TasksComplianceGithubDetailReadApiArg = {
  id: string;
};
export type TasksScanAwsCreateApiResponse = unknown;
export type TasksScanAwsCreateApiArg = void;
export type TasksScanAzureCreateApiResponse = unknown;
export type TasksScanAzureCreateApiArg = void;
export type TasksScanDocumentListApiResponse = unknown;
export type TasksScanDocumentListApiArg = void;
export type TasksScanDocumentCreateApiResponse = unknown;
export type TasksScanDocumentCreateApiArg = void;
export type TasksScanGithubListApiResponse = unknown;
export type TasksScanGithubListApiArg = void;
export type TasksScanGithubCreateApiResponse = unknown;
export type TasksScanGithubCreateApiArg = void;
export type TasksScanStatusCreateApiResponse =
  /** status 200 Status response */ IntegrationScanStatusResponse;
export type TasksScanStatusCreateApiArg = {
  integrationScanStatus: IntegrationScanStatus;
};
export type GetTasksTodoTaskFilterApiResponse =
  /** status 200 Monitored data retrieved successfully */ object;
export type GetTasksTodoTaskFilterApiArg = {
  /** Specify the control id to query. If not provided, example = VOPS1:005 */
  id?: string;
};
export type GetTasksTodoTaskListApiResponse = unknown;
export type GetTasksTodoTaskListApiArg = void;
export type TrustReportsCreateApiResponse = /** status 201  */ TrustReportRead;
export type TrustReportsCreateApiArg = {
  trustReport: TrustReport;
};
export type TrustReportsGetAllControlsApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: TrustReportRead[];
};
export type TrustReportsGetAllControlsApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type TrustReportsGetAllDocumentsApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: TrustReportRead[];
};
export type TrustReportsGetAllDocumentsApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type TrustReportsGetDetailApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: TrustReportRead[];
};
export type TrustReportsGetDetailApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type TrustReportsGrantAccessApiResponse =
  /** status 201  */ TrustReportRead;
export type TrustReportsGrantAccessApiArg = {
  trustReport: TrustReport;
};
export type TrustReportsRequestAccessDocumentApiResponse =
  /** status 201  */ TrustReportRead;
export type TrustReportsRequestAccessDocumentApiArg = {
  trustReport: TrustReport;
};
export type PostVendorsVendorCompanyCreateApiResponse = unknown;
export type PostVendorsVendorCompanyCreateApiArg = void;
export type GetVendorsVendorCompanyListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: VendorCompanyRead[];
};
export type GetVendorsVendorCompanyListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type PostVendorsVendorContactInfoApiResponse =
  /** status 201  */ VendorContactInfoRead;
export type PostVendorsVendorContactInfoApiArg = {
  vendorContactInfo: VendorContactInfo;
};
export type GetVendorsVendorContactInfoByIdApiResponse =
  /** status 200  */ VendorContactInfoRead;
export type GetVendorsVendorContactInfoByIdApiArg = {
  /** A UUID string identifying this vendor contact info. */
  id: string;
};
export type PutVendorsVendorContactInfoByIdApiResponse =
  /** status 200  */ VendorContactInfoRead;
export type PutVendorsVendorContactInfoByIdApiArg = {
  /** A UUID string identifying this vendor contact info. */
  id: string;
  vendorContactInfo: VendorContactInfo;
};
export type PatchVendorsVendorContactInfoByIdApiResponse =
  /** status 200  */ VendorContactInfoRead;
export type PatchVendorsVendorContactInfoByIdApiArg = {
  /** A UUID string identifying this vendor contact info. */
  id: string;
  vendorContactInfo: VendorContactInfo;
};
export type PostVendorsVendorReferenceApiResponse =
  /** status 201  */ VendorReferenceRead;
export type PostVendorsVendorReferenceApiArg = {
  vendorReference: VendorReference;
};
export type GetVendorsVendorReferenceByIdApiResponse =
  /** status 200  */ VendorReferenceRead;
export type GetVendorsVendorReferenceByIdApiArg = {
  /** A UUID string identifying this vendor reference. */
  id: string;
};
export type PutVendorsVendorReferenceByIdApiResponse =
  /** status 200  */ VendorReferenceRead;
export type PutVendorsVendorReferenceByIdApiArg = {
  /** A UUID string identifying this vendor reference. */
  id: string;
  vendorReference: VendorReference;
};
export type PatchVendorsVendorReferenceByIdApiResponse =
  /** status 200  */ VendorReferenceRead;
export type PatchVendorsVendorReferenceByIdApiArg = {
  /** A UUID string identifying this vendor reference. */
  id: string;
  vendorReference: VendorReference;
};
export type PostVendorsVendorRiskManagementApiResponse =
  /** status 201  */ VendorRiskManagementRead;
export type PostVendorsVendorRiskManagementApiArg = {
  vendorRiskManagement: VendorRiskManagement;
};
export type GetVendorsVendorRiskManagementByIdApiResponse =
  /** status 200  */ VendorRiskManagementRead;
export type GetVendorsVendorRiskManagementByIdApiArg = {
  /** A UUID string identifying this vendor risk management. */
  id: string;
};
export type PutVendorsVendorRiskManagementByIdApiResponse =
  /** status 200  */ VendorRiskManagementRead;
export type PutVendorsVendorRiskManagementByIdApiArg = {
  /** A UUID string identifying this vendor risk management. */
  id: string;
  vendorRiskManagement: VendorRiskManagement;
};
export type PatchVendorsVendorRiskManagementByIdApiResponse =
  /** status 200  */ VendorRiskManagementRead;
export type PatchVendorsVendorRiskManagementByIdApiArg = {
  /** A UUID string identifying this vendor risk management. */
  id: string;
  vendorRiskManagement: VendorRiskManagement;
};
export type PostVendorsVendorSecurityReviewApiResponse =
  /** status 201  */ VendorSecurityReviewRead;
export type PostVendorsVendorSecurityReviewApiArg = {
  vendorSecurityReview: VendorSecurityReview;
};
export type GetVendorsVendorSecurityReviewByIdApiResponse =
  /** status 200  */ VendorSecurityReviewRead;
export type GetVendorsVendorSecurityReviewByIdApiArg = {
  /** A UUID string identifying this vendor security review. */
  id: string;
};
export type PutVendorsVendorSecurityReviewByIdApiResponse =
  /** status 200  */ VendorSecurityReviewRead;
export type PutVendorsVendorSecurityReviewByIdApiArg = {
  /** A UUID string identifying this vendor security review. */
  id: string;
  vendorSecurityReview: VendorSecurityReview;
};
export type PatchVendorsVendorSecurityReviewByIdApiResponse =
  /** status 200  */ VendorSecurityReviewRead;
export type PatchVendorsVendorSecurityReviewByIdApiArg = {
  /** A UUID string identifying this vendor security review. */
  id: string;
  vendorSecurityReview: VendorSecurityReview;
};
export type VendorsVendorsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: VendorRead[];
};
export type VendorsVendorsListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type VendorsVendorsCreateApiResponse =
  /** status 201  */ VendorCreateRead;
export type VendorsVendorsCreateApiArg = {
  vendorCreate: VendorCreate;
};
export type VendorsVendorsReadApiResponse = /** status 200  */ VendorRead;
export type VendorsVendorsReadApiArg = {
  id: string;
};
export type VendorsVendorsUpdateApiResponse = /** status 200  */ VendorRead;
export type VendorsVendorsUpdateApiArg = {
  id: string;
  vendor: Vendor;
};
export type VendorsVendorsPartialUpdateApiResponse =
  /** status 200  */ VendorRead;
export type VendorsVendorsPartialUpdateApiArg = {
  id: string;
  vendor: Vendor;
};
export type VendorsVendorsDeleteApiResponse = unknown;
export type VendorsVendorsDeleteApiArg = {
  id: string;
};
export type VulnerabilityListApiResponse = unknown;
export type VulnerabilityListApiArg = void;
export type VulnerabilityCreateApiResponse = unknown;
export type VulnerabilityCreateApiArg = void;
export type VendorAccess = {
  name: string;
  vendor_website_url?: string | null;
  internal_security_owner?: string | null;
  inherent_risk: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  additional_note?: string | null;
  authentication_method?: string | null;
  service_provided?: string | null;
};
export type VendorAccessRead = {
  id?: string;
  name: string;
  vendor_website_url?: string | null;
  internal_security_owner?: string | null;
  inherent_risk: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  additional_note?: string | null;
  authentication_method?: string | null;
  service_provided?: string | null;
  synced?: string;
  access_data?: string;
};
export type AccessReviewVendor = {
  vendor: VendorAccess;
  accessData?: string;
  status?: "draft" | "in_review" | "completed";
  access_review: string;
  reviewer?: string | null;
};
export type AccessReviewVendorRead = {
  id?: string;
  vendor: VendorAccessRead;
  document_file?: string;
  accessData?: string;
  status?: "draft" | "in_review" | "completed";
  access_review: string;
  reviewer?: string | null;
};
export type AccessReview = {
  name?: string;
  status?: "draft" | "in_review" | "completed";
  date_completed?: string | null;
  description?: string;
  effective_date?: string | null;
  note?: string | null;
};
export type AccessReviewRead = {
  id?: string;
  company?: string;
  name?: string;
  status?: "draft" | "in_review" | "completed";
  date_started?: string;
  date_completed?: string | null;
  description?: string;
  effective_date?: string | null;
  note?: string | null;
  access_review_review_account_type?: AccessReviewVendor[];
};
export type Access = {};
export type AccessRead = {
  employees?: string;
};
export type AccessModel = {
  first_name?: string | null;
  email?: string | null;
  platform?: string | null;
  status?: string | null;
  type?: string | null;
  deactivate?: boolean | null;
  note?: string | null;
  review_date?: string | null;
  start_date?: string | null;
  access_level?: string | null;
};
export type AccessModelRead = {
  id?: string;
  first_name?: string | null;
  email?: string | null;
  platform?: string | null;
  status?: string | null;
  type?: string | null;
  created_at?: string;
  deactivate?: boolean | null;
  note?: string | null;
  review_date?: string | null;
  start_date?: string | null;
  access_level?: string | null;
};
export type LoginResponse = {
  access: string;
  refresh: string;
};
export type LoginErrorResponse = {
  username?: string;
  password?: string;
  error?: string;
  detail?: string;
};
export type Login = {
  password: string;
  username: string;
};
export type UserMfaMethod = {
  name: string;
  is_primary?: boolean;
};
export type Sso = {
  code: string;
  redirect_uri: string;
};
export type CompanyInfo = {
  company_short_name: string;
  company_long_name: string;
  company_terms_of_service_url?: string | null;
  company_privacy_url?: string | null;
  company_website_url?: string | null;
  company_email_domain?: string | null;
  company_address?: string | null;
  aws?: boolean;
  azure?: boolean;
  bitbucket?: boolean;
  github?: boolean;
  google_cloud?: boolean;
  gsuite?: boolean;
  jira?: boolean;
  slack?: boolean;
  trello?: boolean;
  office365?: boolean;
  soc2_type1?: boolean;
  soc2_type2?: boolean;
  soc3?: boolean;
  hipaaa?: boolean;
  gdpr?: boolean;
  other_option?: boolean;
  other_text?: string;
  onboarding_complete?: boolean;
  onboarding_progress?: number;
};
export type CompanyInfoRead = {
  id?: string;
  created?: string;
  modified?: string;
  company_short_name: string;
  company_long_name: string;
  company_terms_of_service_url?: string | null;
  company_privacy_url?: string | null;
  company_website_url?: string | null;
  company_email_domain?: string | null;
  company_address?: string | null;
  aws?: boolean;
  azure?: boolean;
  bitbucket?: boolean;
  github?: boolean;
  google_cloud?: boolean;
  gsuite?: boolean;
  jira?: boolean;
  slack?: boolean;
  trello?: boolean;
  office365?: boolean;
  soc2_type1?: boolean;
  soc2_type2?: boolean;
  soc3?: boolean;
  hipaaa?: boolean;
  gdpr?: boolean;
  other_option?: boolean;
  other_text?: string;
  onboarding_complete?: boolean;
  onboarding_progress?: number;
  owner?: string;
  creator?: string;
  modifier?: string;
};
export type ComplianceManger = {
  name?: string | null;
  email: string;
  phone_number?: string | null;
  position_in_company?: string | null;
  address?: string | null;
  cloud_service_using?: string | null;
  type_of_compliance_looking_for?: string | null;
};
export type ComplianceMangerRead = {
  id?: string;
  created?: string;
  modified?: string;
  name?: string | null;
  email: string;
  phone_number?: string | null;
  position_in_company?: string | null;
  address?: string | null;
  cloud_service_using?: string | null;
  type_of_compliance_looking_for?: string | null;
  company?: string;
  creator?: string;
  modifier?: string;
};
export type User = {
  email: string;
  last_login?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  is_active?: boolean;
  company_name: string;
  is_employee?: boolean;
  is_auditor?: boolean;
};
export type UserRead = {
  id?: string;
  email: string;
  last_login?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  is_active?: boolean;
  company_name: string;
  compliance_manager?: string;
  password_change_required?: string;
  company?: string;
  created?: string;
  is_employee?: boolean;
  is_auditor?: boolean;
};
export type Email = {
  email: string;
};
export type PasswordToken = {
  password: string;
  token: string;
};
export type ResetToken = {
  token: string;
};
export type PasswordChange = {
  new_password1: string;
  new_password2: string;
};
export type RestAuthRegister = {
  username: string;
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
  company_name: string;
};
export type TokenRefreshResponse = {
  access: string;
};
export type TokenRefresh = {
  refresh: string;
};
export type TokenRefreshRead = {
  refresh: string;
  access?: string;
};
export type TokenVerify = {
  token: string;
};
export type ChatbotResponse = {
  text: string;
};
export type Chatbot = {
  query: string;
};
export type Control = {
  identifier: string;
  title: string;
  criterion: string;
};
export type ControlRead = {
  id?: string;
  identifier: string;
  category?: string;
  title: string;
  description?: string;
  criterion: string;
  tests?: string;
  status?: string;
};
export type Sla = {
  test_result?: number | null;
};
export type SlaRead = {
  id?: string;
  test_result?: number | null;
  control?: string;
  test?: string;
};
export type Computer = {
  company: string;
  owner: string;
  computer: string;
  monitoring: string;
  os: string;
  password_manager?: boolean;
  hard_drive_encryption?: boolean;
  anti_virus?: boolean;
  screen_lock?: boolean;
  last_check?: string | null;
};
export type ComputerRead = {
  id?: string;
  company: string;
  owner: string;
  computer: string;
  monitoring: string;
  os: string;
  password_manager?: boolean;
  hard_drive_encryption?: boolean;
  anti_virus?: boolean;
  screen_lock?: boolean;
  last_check?: string | null;
};
export type Document = {
  title: string;
  document_type:
    | "Access request ticket and history"
    | "Anonymous whistleblower channel"
    | "Application status page"
    | "Board of directors charter"
    | "Board of directors meeting minutes and agenda"
    | "Cloud provider service agreement"
    | "Company organization chart"
    | "Completed employee background checks"
    | "Completed performance evaluations"
    | "Contractor agreement"
    | "Customer data deletion record"
    | "Cybersecurity insurance policy document"
    | "Employee agreement"
    | "Employee termination checklist"
    | "Job descriptions for key security roles"
    | "Network diagram"
    | "Penetration test report"
    | "System Description (Section III)"
    | "Compliance Report (SOC 2)"
    | "Compliance Report (ISO 27001)"
    | "Incident Report or Root Cause Analysis"
    | "Tabletop Disaster Recovery Exercise"
    | "Proof of Media/Device Disposal: Certificates of Destruction for Removable Storage or Employee Computers"
    | "Evidence of encryption on portable and removable media devices"
    | "Intrusion detection system installation";
};
export type DocumentRead = {
  id?: string;
  title: string;
  uploaded_at?: string;
  document_type:
    | "Access request ticket and history"
    | "Anonymous whistleblower channel"
    | "Application status page"
    | "Board of directors charter"
    | "Board of directors meeting minutes and agenda"
    | "Cloud provider service agreement"
    | "Company organization chart"
    | "Completed employee background checks"
    | "Completed performance evaluations"
    | "Contractor agreement"
    | "Customer data deletion record"
    | "Cybersecurity insurance policy document"
    | "Employee agreement"
    | "Employee termination checklist"
    | "Job descriptions for key security roles"
    | "Network diagram"
    | "Penetration test report"
    | "System Description (Section III)"
    | "Compliance Report (SOC 2)"
    | "Compliance Report (ISO 27001)"
    | "Incident Report or Root Cause Analysis"
    | "Tabletop Disaster Recovery Exercise"
    | "Proof of Media/Device Disposal: Certificates of Destruction for Removable Storage or Employee Computers"
    | "Evidence of encryption on portable and removable media devices"
    | "Intrusion detection system installation";
  download_url?: string;
};
export type Employee = {
  name: string;
  email: string;
  background_checked?: boolean;
  accepted_policies?: boolean;
  security_training?: boolean;
  hf_training_status?: number;
  invited?: boolean;
  is_deleted?: boolean;
  title?: string | null;
  onboarding_date?: string | null;
  offboarding_date?: string | null;
  background_checked_date?: string | null;
  accepted_policies_date?: string | null;
  security_training_date?: string | null;
  company: string;
  creator: string;
  modifier: string;
  background_checked_files?: number[];
  security_training_files?: number[];
};
export type EmployeeRead = {
  id?: string;
  created?: string;
  modified?: string;
  name: string;
  email: string;
  background_checked?: boolean;
  accepted_policies?: boolean;
  security_training?: boolean;
  hf_training_status?: number;
  invited?: boolean;
  is_deleted?: boolean;
  title?: string | null;
  onboarding_date?: string | null;
  offboarding_date?: string | null;
  background_checked_date?: string | null;
  accepted_policies_date?: string | null;
  security_training_date?: string | null;
  company: string;
  creator: string;
  modifier: string;
  background_checked_files?: number[];
  security_training_files?: number[];
};
export type EmployeeMdm = {
  computer: string;
  employee?: Employee;
};
export type EmployeeMdmRead = {
  id?: string;
  computer: string;
  employee?: EmployeeRead;
};
export type EmployeeUpdateResponse = {
  detail: string;
};
export type EmployeeEmploymentTypeUpdate = {
  employees: string[];
  employment_type: "Ex-Employee" | "Contractor" | "Account" | "Employee";
};
export type EmployeeMerge = {
  employees: string[];
  primary_employee: string;
};
export type Integration = {
  company: string;
  name: string;
  metadata_json: object;
  active?: boolean;
};
export type IntegrationRead = {
  id?: string;
  company: string;
  name: string;
  template_name?:
    | "aws"
    | "google"
    | "office365"
    | "gsuite"
    | "slack"
    | "github"
    | "trello"
    | "jira"
    | "azure"
    | "bitbucket";
  metadata_json: object;
  active?: boolean;
  creator?: string;
  modifier?: string;
  created?: string;
  modified?: string;
};
export type Aws = {
  role_arn: string;
  external_id: string;
  name: string;
};
export type AwsSerializerCloudFormation = {
  role_arn: string;
  token: string;
};
export type Azure = {
  name: string;
  client_id: string;
  tenant_id: string;
  client_secret: string;
  subscription_id: string;
};
export type GitHub = {
  code: string;
  redirect_uri: string;
  name: string;
};
export type GSuite = {
  code: string;
  redirect_uri: string;
  name: string;
};
export type Jira = {
  code: string;
  redirect_uri: string;
  name: string;
};
export type Office365 = {
  tenant_id: string;
  redirect_uri: string;
  name: string;
};
export type Slack = {
  code: string;
  redirect_uri: string;
  name: string;
};
export type InventoryDetail = {
  name: string;
  owner?: string | null;
  description?: string | null;
  instance_id?: string | null;
  region?: string | null;
};
export type InventoryDetailRead = {
  id?: number;
  name: string;
  owner?: string | null;
  description?: string | null;
  instance_id?: string | null;
  region?: string | null;
};
export type SubscriptionItem = {
  product_id: string;
  product_name: string;
  product_description: string;
  price_id: string;
  price_nickname: string;
  price: string;
  freq: string;
  subscription_status: string;
  period_start: string;
  period_end: string;
  trial_start: string;
  trial_end: string;
  ended_at: string;
  cancel_at: string;
  cancel_at_period_end: boolean;
};
export type SubscriptionItemRead = {
  product_id: string;
  product_name: string;
  product_description: string;
  price_id: string;
  price_nickname: string;
  price: string;
  freq: string;
  subscription_status: string;
  period_start: string;
  period_end: string;
  trial_start: string;
  trial_end: string;
  ended_at: string;
  cancel_at: string;
  cancel_at_period_end: boolean;
  services?: string;
};
export type Subscription = {
  id: string;
  current_period_start: string;
  current_period_end: string;
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "trialing"
    | "unpaid";
  cancel_at?: string | null;
  cancel_at_period_end?: boolean;
  trial_start?: string | null;
  trial_end?: string | null;
};
export type Price = {
  id: string;
  product_id: string;
  name: string;
  unit_amount?: number | null;
  avail: boolean;
  currency: string;
};
export type CompanyPolicyTemplate = {
  policy_template?: string | null;
  policy_content?: string | null;
  is_updated_policy?: boolean;
};
export type CompanyPolicyTemplateRead = {
  id?: string;
  policy_content_replaced?: string;
  placeholders?: string;
  topic_name?: string;
  created?: string;
  modified?: string;
  policy_template?: string | null;
  policy_content?: string | null;
  is_updated_policy?: boolean;
  company?: string;
  topic?: string;
  creator?: string;
  modifier?: string;
};
export type Topic = {
  title: string;
  rel_id: string;
  subtext: string;
  topic_type: "policy" | "setup";
};
export type TopicRead = {
  id?: string;
  title: string;
  rel_id: string;
  subtext: string;
  topic_type: "policy" | "setup";
  icon?: string;
};
export type Report = {
  name: string;
  owner: string;
};
export type ReportRead = {
  id?: string;
  name: string;
  owner: string;
  report_url?: string;
};
export type RiskCategory = {
  name: string;
};
export type RiskCategoryRead = {
  id?: string;
  name: string;
};
export type RiskLibrary = {
  description: string;
  example: string;
  likelihood?: 0 | 1 | 2 | 3 | 4 | 5;
  impact?: 0 | 1 | 2 | 3 | 4 | 5;
  category: string;
};
export type RiskLibraryRead = {
  id?: string;
  is_added_to_risk_scenario?: string;
  created?: string;
  modified?: string;
  description: string;
  example: string;
  likelihood?: 0 | 1 | 2 | 3 | 4 | 5;
  impact?: 0 | 1 | 2 | 3 | 4 | 5;
  category: string;
};
export type RiskScenario = {
  description: string;
  likelihood?: 0 | 1 | 2 | 3 | 4 | 5;
  impact?: 0 | 1 | 2 | 3 | 4 | 5;
  notes?: string;
  category: string;
  risk_library?: string | null;
};
export type RiskScenarioRead = {
  id?: string;
  created?: string;
  modified?: string;
  description: string;
  likelihood?: 0 | 1 | 2 | 3 | 4 | 5;
  impact?: 0 | 1 | 2 | 3 | 4 | 5;
  notes?: string;
  category: string;
  risk_library?: string | null;
};
export type RiskTreatmentPlan = {
  action: "Accept" | "Transfer" | "Mitigate" | "Avoid";
  due_date: string;
  review_notes: string;
  completed?: boolean;
  risk_scenario: string;
  assigned_to?: string;
  company: string;
};
export type RiskTreatmentPlanRead = {
  id?: string;
  created?: string;
  modified?: string;
  action: "Accept" | "Transfer" | "Mitigate" | "Avoid";
  due_date: string;
  review_notes: string;
  completed?: boolean;
  reviewed_at?: string;
  risk_scenario: string;
  assigned_to?: string;
  company: string;
};
export type RiskResidualScore = {
  likelihood?: 0 | 1 | 2 | 3 | 4 | 5;
  impact?: 0 | 1 | 2 | 3 | 4 | 5;
  risk_scenario: string;
};
export type RiskResidualScoreRead = {
  id?: string;
  created?: string;
  modified?: string;
  likelihood?: 0 | 1 | 2 | 3 | 4 | 5;
  impact?: 0 | 1 | 2 | 3 | 4 | 5;
  risk_scenario: string;
};
export type RiskReview = {
  likelihood?: 0 | 1 | 2 | 3 | 4 | 5;
  impact?: 0 | 1 | 2 | 3 | 4 | 5;
  review_date: string;
  review_notes: string;
  risk_scenario: string;
  reviewer: string;
};
export type RiskReviewRead = {
  id?: string;
  created?: string;
  modified?: string;
  likelihood?: 0 | 1 | 2 | 3 | 4 | 5;
  impact?: 0 | 1 | 2 | 3 | 4 | 5;
  review_date: string;
  review_notes: string;
  reviewed_at?: string;
  risk_scenario: string;
  reviewer: string;
};
export type IntegrationScanStatusResponse = {
  running: boolean;
};
export type IntegrationScanStatus = {
  type: "aws" | "employee";
};
export type TrustReport = {
  title: string;
  sub_title: string;
  company: string;
  is_public?: boolean;
  bacground_color_1?: string | null;
  bacground_color_2?: string | null;
};
export type TrustReportRead = {
  id?: string;
  title: string;
  sub_title: string;
  company: string;
  is_public?: boolean;
  bacground_color_1?: string | null;
  bacground_color_2?: string | null;
  logo?: string | null;
  documents?: string;
  controls?: string;
};
export type VendorCompany = {
  name: string;
  logo_url?: string | null;
  vendor_website_url?: string | null;
  inherent_risk: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  additional_note?: string | null;
  service_provided?: string | null;
  authentication_method?: string | null;
};
export type VendorCompanyRead = {
  id?: string;
  name: string;
  logo_url?: string | null;
  vendor_website_url?: string | null;
  inherent_risk: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  additional_note?: string | null;
  service_provided?: string | null;
  authentication_method?: string | null;
  is_added_to_vendor?: string;
};
export type VendorContactInfo = {
  vendor: string;
  account_manager_name: string;
  account_manager_email: string;
  creator: string;
  modifier: string;
};
export type VendorContactInfoRead = {
  id?: string;
  vendor: string;
  account_manager_name: string;
  account_manager_email: string;
  creator: string;
  modifier: string;
};
export type VendorReference = {
  vendor: string;
  creator: string;
  modifier: string;
};
export type VendorReferenceRead = {
  id?: string;
  vendor: string;
  file?: string;
  creator: string;
  modifier: string;
};
export type VendorRiskManagement = {
  vendor: string;
  vendor_category: string;
  risk_level: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  creator: string;
  modifier: string;
};
export type VendorRiskManagementRead = {
  id?: string;
  vendor: string;
  vendor_category: string;
  risk_level: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  creator: string;
  modifier: string;
};
export type VendorSecurityReview = {
  vendor: string;
  creator: string;
  modifier: string;
};
export type VendorSecurityReviewRead = {
  id?: string;
  vendor: string;
  file?: string;
  creator: string;
  modifier: string;
};
export type Vendor = {
  name: string;
  vendor_website_url?: string | null;
  internal_security_owner?: string | null;
  inherent_risk: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  additional_note?: string | null;
  authentication_method?: string | null;
  service_provided?: string | null;
};
export type VendorRead = {
  id?: string;
  name: string;
  vendor_website_url?: string | null;
  internal_security_owner?: string | null;
  inherent_risk: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  additional_note?: string | null;
  authentication_method?: string | null;
  service_provided?: string | null;
  contact_info?: VendorContactInfoRead[];
  security_reviews?: VendorSecurityReviewRead[];
  risk_management?: VendorRiskManagementRead[];
  references?: VendorReferenceRead[];
};
export type VendorCreate = {
  name: string;
  vendor_website_url?: string | null;
  internal_security_owner?: string | null;
  inherent_risk: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  additional_note?: string | null;
  authentication_method?: string | null;
  service_provided?: string | null;
  vendor_library?: string | null;
};
export type VendorCreateRead = {
  id?: string;
  name: string;
  vendor_website_url?: string | null;
  internal_security_owner?: string | null;
  inherent_risk: "Critical" | "High" | "Medium" | "Low" | "Unscored";
  additional_note?: string | null;
  authentication_method?: string | null;
  service_provided?: string | null;
  vendor_library?: string | null;
};
export const {
  useGetAccessAccessReviewDetailByIdQuery,
  useLazyGetAccessAccessReviewDetailByIdQuery,
  usePutAccessAccessReviewDetailByIdMutation,
  usePatchAccessAccessReviewDetailByIdMutation,
  useDeleteAccessAccessReviewDetailByIdMutation,
  useGetAccessAccessReviewsQuery,
  useLazyGetAccessAccessReviewsQuery,
  usePostAccessAccessReviewsMutation,
  useGetAccessAccessReviewsByIdQuery,
  useLazyGetAccessAccessReviewsByIdQuery,
  usePutAccessAccessReviewsByIdMutation,
  usePatchAccessAccessReviewsByIdMutation,
  useDeleteAccessAccessReviewsByIdMutation,
  useAccessAccessListQuery,
  useLazyAccessAccessListQuery,
  useAccessAccessCreateMutation,
  useAccessAccessReadQuery,
  useLazyAccessAccessReadQuery,
  useAccessAccessUpdateMutation,
  useAccessAccessDeleteMutation,
  useAccessAccessChangeOwnerPartialUpdateMutation,
  useAccessAccessScanCreateMutation,
  useGetAccessExportAccessJsonByIdQuery,
  useLazyGetAccessExportAccessJsonByIdQuery,
  useAccountsApolloListQuery,
  useLazyAccountsApolloListQuery,
  useAccountsAuthenticationCodeRequestCreateMutation,
  useAccountsAuthenticationLoginCreateMutation,
  useAccountsAuthenticationLoginCodeCreateMutation,
  usePostAccountsAuthenticationMfaChangePrimaryMethodMutation,
  useAccountsAuthenticationMfaConfigListQuery,
  useLazyAccountsAuthenticationMfaConfigListQuery,
  useGetAccountsAuthenticationMfaUserActiveMethodsQuery,
  useLazyGetAccountsAuthenticationMfaUserActiveMethodsQuery,
  useAccountsAuthenticationSsoGoogleCreateMutation,
  useAccountsAuthenticationSsoMicrosoftCreateMutation,
  useAccountsAuthenticationActivateCreateMutation,
  useAccountsAuthenticationActivateConfirmCreateMutation,
  useAccountsAuthenticationCodesRegenerateCreateMutation,
  useAccountsAuthenticationDeactivateCreateMutation,
  useAccountsCompanyListQuery,
  useLazyAccountsCompanyListQuery,
  useAccountsCompanyReadQuery,
  useLazyAccountsCompanyReadQuery,
  useAccountsCompanyUpdateMutation,
  useAccountsCompanyPartialUpdateMutation,
  useAccountsComplianceManagerListQuery,
  useLazyAccountsComplianceManagerListQuery,
  useAccountsComplianceManagerReadQuery,
  useLazyAccountsComplianceManagerReadQuery,
  useAccountsComplianceManagerUpdateMutation,
  useAccountsComplianceManagerPartialUpdateMutation,
  useAccountsCurrentUserListQuery,
  useLazyAccountsCurrentUserListQuery,
  useAccountsCustomVerificationEmailSentListQuery,
  useLazyAccountsCustomVerificationEmailSentListQuery,
  useAccountsPasswordResetCreateMutation,
  useAccountsPasswordResetConfirmCreateMutation,
  useAccountsPasswordResetValidateTokenCreateMutation,
  usePostAccountsRestAuthPasswordChangeMutation,
  usePostAccountsRestAuthRegistrationMutation,
  usePostAccountsRestAuthRegistrationAccountConfirmEmailByKeyMutation,
  useAccountsTokenRefreshCreateMutation,
  useAccountsTokenVerifyCreateMutation,
  useAccountsUserAuditorListQuery,
  useLazyAccountsUserAuditorListQuery,
  useAccountsUserAuditorCreateMutation,
  useAccountsUserAuditorUpdateMutation,
  useChatbotChatsCreateMutation,
  useComplianceControlsListQuery,
  useLazyComplianceControlsListQuery,
  useComplianceControlsRunTestAllMutation,
  useComplianceControlsSummaryListQuery,
  useLazyComplianceControlsSummaryListQuery,
  useComplianceControlsReadQuery,
  useLazyComplianceControlsReadQuery,
  useComplianceDownloadSlaTestsListQuery,
  useLazyComplianceDownloadSlaTestsListQuery,
  useComplianceDownloadSlaTestsCreateMutation,
  useComplianceDownloadSlaTestsReadQuery,
  useLazyComplianceDownloadSlaTestsReadQuery,
  useComplianceFrameworkListQuery,
  useLazyComplianceFrameworkListQuery,
  useComplianceHomeSummaryListQuery,
  useLazyComplianceHomeSummaryListQuery,
  useComplianceSlaDateEditUpdateMutation,
  useComplianceSlaDateEditPartialUpdateMutation,
  useComplianceSlaTestsListQuery,
  useLazyComplianceSlaTestsListQuery,
  useComplianceSlaTestsReadQuery,
  useLazyComplianceSlaTestsReadQuery,
  useComputersComputersListQuery,
  useLazyComputersComputersListQuery,
  useComputersComputersCreateMutation,
  useComputersComputersReadQuery,
  useLazyComputersComputersReadQuery,
  useComputersComputersPartialUpdateMutation,
  useComputersComputersDeleteMutation,
  useComputersOsqueryLogDataCreateMutation,
  useDocumentsListQuery,
  useLazyDocumentsListQuery,
  useDocumentsCreateMutation,
  useDocumentsGetDocumentTypesQuery,
  useLazyDocumentsGetDocumentTypesQuery,
  useDocumentsDeleteMutation,
  useEmployeesListQuery,
  useLazyEmployeesListQuery,
  useEmployeesCreateMutation,
  useEmployeesPostMutation,
  useEmployeesCurrentEmployeeReadQuery,
  useLazyEmployeesCurrentEmployeeReadQuery,
  useEmployeesEmployeeMdmListQuery,
  useLazyEmployeesEmployeeMdmListQuery,
  useEmployeesEmployeeMdmCreateMutation,
  useEmployeesEmploymentAccessReadQuery,
  useLazyEmployeesEmploymentAccessReadQuery,
  useEmployeesEmploymentTypeCreateMutation,
  useEmployeesMergeCreateMutation,
  useEmployeesPutMutation,
  useIntegrationsListQuery,
  useLazyIntegrationsListQuery,
  useIntegrationsAwsCreateMutation,
  useIntegrationsAwscloudfListQuery,
  useLazyIntegrationsAwscloudfListQuery,
  useIntegrationsAwscloudfCreateMutation,
  useIntegrationsAzureCreateMutation,
  useIntegrationsDebugCreateMutation,
  useIntegrationsGithubCreateMutation,
  useIntegrationsGsuiteCreateMutation,
  useGetIntegrationsIntegrationListCompanyQuery,
  useLazyGetIntegrationsIntegrationListCompanyQuery,
  useGetIntegrationsIntegrationListQuery,
  useLazyGetIntegrationsIntegrationListQuery,
  usePostIntegrationsIntegrationListMutation,
  useIntegrationsJiraCreateMutation,
  useIntegrationsOffice365CreateMutation,
  useIntegrationsSlackCreateMutation,
  useIntegrationsReadQuery,
  useLazyIntegrationsReadQuery,
  useInventoryListQuery,
  useLazyInventoryListQuery,
  useInventoryUpdateMutation,
  useInventoryDeleteMutation,
  useInventoryInventoryDetailReadQuery,
  useLazyInventoryInventoryDetailReadQuery,
  useInventoryInventoryDetailPartialUpdateMutation,
  usePaymentsCheckoutCreateMutation,
  usePostPaymentsCustomerPortalMutation,
  useGetPaymentsMySubscriptionItemsQuery,
  useLazyGetPaymentsMySubscriptionItemsQuery,
  useGetPaymentsMySubscriptionQuery,
  useLazyGetPaymentsMySubscriptionQuery,
  useGetPaymentsSubscribableProductQuery,
  useLazyGetPaymentsSubscribableProductQuery,
  useQuestionsAnswerCreateMutation,
  useQuestionsCompanyPolicyTemplatesListQuery,
  useLazyQuestionsCompanyPolicyTemplatesListQuery,
  useQuestionsCompanyPolicyTemplatesRetrieveTopicTemplateQuery,
  useLazyQuestionsCompanyPolicyTemplatesRetrieveTopicTemplateQuery,
  useQuestionsCompanyPolicyTemplatesReadQuery,
  useLazyQuestionsCompanyPolicyTemplatesReadQuery,
  useQuestionsCompanyPolicyTemplatesUpdateMutation,
  useQuestionsCompanyPolicyTemplatesPartialUpdateMutation,
  useQuestionsEmployeeTopicsListQuery,
  useLazyQuestionsEmployeeTopicsListQuery,
  useQuestionsEmployeeTopicsReadQuery,
  useLazyQuestionsEmployeeTopicsReadQuery,
  useQuestionsTestMigrationCreateMutation,
  useQuestionsTopicsListQuery,
  useLazyQuestionsTopicsListQuery,
  useQuestionsTopicsReadQuery,
  useLazyQuestionsTopicsReadQuery,
  useQuestionsTopicsIconListQuery,
  useLazyQuestionsTopicsIconListQuery,
  useQuestionsTopicsQuestionsAnswersFileAnswerListQuery,
  useLazyQuestionsTopicsQuestionsAnswersFileAnswerListQuery,
  useReportsListQuery,
  useLazyReportsListQuery,
  useReportsCreateMutation,
  useReportsDeleteMutation,
  usePostRiskManagementRiskCalculatorMutation,
  useGetRiskManagementRiskCategoriesQuery,
  useLazyGetRiskManagementRiskCategoriesQuery,
  usePostRiskManagementRiskCategoriesMutation,
  useGetRiskManagementRiskDistributionQuery,
  useLazyGetRiskManagementRiskDistributionQuery,
  useGetRiskManagementRiskLibrariesQuery,
  useLazyGetRiskManagementRiskLibrariesQuery,
  usePostRiskManagementRiskLibrariesMutation,
  useGetRiskManagementRiskScenariosQuery,
  useLazyGetRiskManagementRiskScenariosQuery,
  usePostRiskManagementRiskScenariosMutation,
  useDeleteRiskManagementRiskScenariosRemoveLibraryByLibraryIdMutation,
  useGetRiskManagementRiskScenariosByIdQuery,
  useLazyGetRiskManagementRiskScenariosByIdQuery,
  usePutRiskManagementRiskScenariosByIdMutation,
  usePatchRiskManagementRiskScenariosByIdMutation,
  useGetRiskManagementRiskScenariosByIdResidualScoreQuery,
  useLazyGetRiskManagementRiskScenariosByIdResidualScoreQuery,
  usePutRiskManagementRiskScenariosByIdResidualScoreMutation,
  usePatchRiskManagementRiskScenariosByIdResidualScoreMutation,
  useGetRiskManagementRiskScenariosByIdReviewQuery,
  useLazyGetRiskManagementRiskScenariosByIdReviewQuery,
  usePutRiskManagementRiskScenariosByIdReviewMutation,
  usePatchRiskManagementRiskScenariosByIdReviewMutation,
  usePostRiskManagementRiskScenariosByRiskScenarioIdResidualScoresMutation,
  usePostRiskManagementRiskScenariosByRiskScenarioIdReviewsMutation,
  useTasksComplianceAllTestListQuery,
  useLazyTasksComplianceAllTestListQuery,
  useTasksComplianceAwsDetailReadQuery,
  useLazyTasksComplianceAwsDetailReadQuery,
  useTasksComplianceGithubDetailReadQuery,
  useLazyTasksComplianceGithubDetailReadQuery,
  useTasksScanAwsCreateMutation,
  useTasksScanAzureCreateMutation,
  useTasksScanDocumentListQuery,
  useLazyTasksScanDocumentListQuery,
  useTasksScanDocumentCreateMutation,
  useTasksScanGithubListQuery,
  useLazyTasksScanGithubListQuery,
  useTasksScanGithubCreateMutation,
  useTasksScanStatusCreateMutation,
  useGetTasksTodoTaskFilterQuery,
  useLazyGetTasksTodoTaskFilterQuery,
  useGetTasksTodoTaskListQuery,
  useLazyGetTasksTodoTaskListQuery,
  useTrustReportsCreateMutation,
  useTrustReportsGetAllControlsQuery,
  useLazyTrustReportsGetAllControlsQuery,
  useTrustReportsGetAllDocumentsQuery,
  useLazyTrustReportsGetAllDocumentsQuery,
  useTrustReportsGetDetailQuery,
  useLazyTrustReportsGetDetailQuery,
  useTrustReportsGrantAccessMutation,
  useTrustReportsRequestAccessDocumentMutation,
  usePostVendorsVendorCompanyCreateMutation,
  useGetVendorsVendorCompanyListQuery,
  useLazyGetVendorsVendorCompanyListQuery,
  usePostVendorsVendorContactInfoMutation,
  useGetVendorsVendorContactInfoByIdQuery,
  useLazyGetVendorsVendorContactInfoByIdQuery,
  usePutVendorsVendorContactInfoByIdMutation,
  usePatchVendorsVendorContactInfoByIdMutation,
  usePostVendorsVendorReferenceMutation,
  useGetVendorsVendorReferenceByIdQuery,
  useLazyGetVendorsVendorReferenceByIdQuery,
  usePutVendorsVendorReferenceByIdMutation,
  usePatchVendorsVendorReferenceByIdMutation,
  usePostVendorsVendorRiskManagementMutation,
  useGetVendorsVendorRiskManagementByIdQuery,
  useLazyGetVendorsVendorRiskManagementByIdQuery,
  usePutVendorsVendorRiskManagementByIdMutation,
  usePatchVendorsVendorRiskManagementByIdMutation,
  usePostVendorsVendorSecurityReviewMutation,
  useGetVendorsVendorSecurityReviewByIdQuery,
  useLazyGetVendorsVendorSecurityReviewByIdQuery,
  usePutVendorsVendorSecurityReviewByIdMutation,
  usePatchVendorsVendorSecurityReviewByIdMutation,
  useVendorsVendorsListQuery,
  useLazyVendorsVendorsListQuery,
  useVendorsVendorsCreateMutation,
  useVendorsVendorsReadQuery,
  useLazyVendorsVendorsReadQuery,
  useVendorsVendorsUpdateMutation,
  useVendorsVendorsPartialUpdateMutation,
  useVendorsVendorsDeleteMutation,
  useVulnerabilityListQuery,
  useLazyVulnerabilityListQuery,
  useVulnerabilityCreateMutation,
} = injectedRtkApi;
