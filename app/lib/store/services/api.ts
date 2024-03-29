import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.vistar.cloud/api/v1',
    prepareHeaders: (headers) => {
      const accessToken = ""
      if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
      headers.set("accept", "application/json");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  });


// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  baseQuery,
  tagTypes: [
    "User",
    "CompanyInfo",
    "ComplianceManager",
    "GetIntegrations",
    "Access",
    "ChatQA",
    "GetEmployees",
    "GetControls",
    "GetAllControls",
    "GetControlsSummary",
    "GetAwsCompliance",
    "GetAwsComplianceDetail",
    "GetTrustReportDetail",
    "GetReports",
    "Vulnerability",
    "Access",
    "GetRiskLibraries",
    "GetRiskCategories",
    "GetRiskDistribution",

    //autogenerated
    "GetVendorsVendorCompanyList",
    "VendorsVendorsList",
    "GetAccessAccessReviews",
    "IntegrationsList",
    "QuestionsCompanyPolicyTemplatesList",
    "GetRiskManagementRiskLibraries",
    "AccountsCompanyRead",
    "GetAccessAccessReviewsById",
  ],
  endpoints: () => ({}),
});

export function prepareQuery(query: any) {
  let queryString = "";
  Object.entries(query).forEach(([key, value], i) => {
    queryString += `${key}=${value}&`;
  });
  return queryString.slice(0, -1);
}

export const enhanceEndpoints = {
  endpoints: {
    getVendorsVendorCompanyList: {
      providesTags: ["GetVendorsVendorCompanyList"],
    },
    vendorsVendorsList: {
      providesTags: ["VendorsVendorsList"],
    },
    getAccessAccessReviews: {
      providesTags: ["GetAccessAccessReviews"],
    },
    integrationsList: {
      providesTags: ["IntegrationsList"],
    },
    questionsCompanyPolicyTemplatesList: {
      providesTags: ["QuestionsCompanyPolicyTemplatesList"],
    },
    getRiskManagementRiskLibraries: {
      providesTags: ["GetRiskManagementRiskLibraries"],
    },
    accountsCompanyRead: {
      providesTags: ["AccountsCompanyRead"],
    },
    getAccessAccessReviewsById: {
      providesTags: ["GetAccessAccessReviewsById"],
    },


    /* ***************** */

    vendorsVendorsCreate: {
      invalidatesTags: ["GetVendorsVendorCompanyList"],
    },
    postAccessAccessReviews: {
      invalidatesTags: ["GetAccessAccessReviews"],
    },
    deleteAccessAccessReviewsById: {
      invalidatesTags: ["GetAccessAccessReviews"],
    },
    integrationsAwsCreate: {
      invalidatesTags: ["IntegrationsList"],
    },
    integrationsAzureCreate: {
      invalidatesTags: ["IntegrationsList"],
    },
    integrationsGithubCreate: {
      invalidatesTags: ["IntegrationsList"],
    },
    integrationsGsuiteCreate: {
      invalidatesTags: ["IntegrationsList"],
    },
    integrationsJiraCreate: {
      invalidatesTags: ["IntegrationsList"],
    },
    integrationsOffice365Create: {
      invalidatesTags: ["IntegrationsList"],
    },
    integrationsSlackCreate: {
      invalidatesTags: ["IntegrationsList"],
    },
    questionsCompanyPolicyTemplatesUpdate: {
      invalidatesTags: ["QuestionsCompanyPolicyTemplatesList"],
    },
    postRiskManagementRiskScenarios: {
      invalidatesTags: ["GetRiskManagementRiskLibraries"],
    },
    deleteRiskManagementRiskScenariosRemoveLibraryByLibraryId: {
      invalidatesTags: ["GetRiskManagementRiskLibraries"],
    },
    patchAccessAccessReviewDetailById: {
      invalidatesTags: ["GetAccessAccessReviewsById"],
    },
  },
};
/*
.enhanceEndpoints(
  //@ts-ignore
  enhanceEndpoints
);
*/
