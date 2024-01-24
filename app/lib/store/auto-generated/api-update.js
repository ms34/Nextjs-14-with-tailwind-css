const fs = require("fs");

const filePath = "./app/lib/store/auto-generated/vistarEndpoints.ts";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  
  const searchValue = `import { api } from "../services/api";`;
  const replaceValue = `import { api, enhanceEndpoints } from "../services/api";`;
  const updated = data.replace(searchValue, replaceValue);
  const searchValue2 = `overrideExisting: false,
});`;
const replaceValue2 = `overrideExisting: false,
}).enhanceEndpoints(
  //@ts-ignore
  enhanceEndpoints 
  );`;
  const updated2 = updated.replace(searchValue2, replaceValue2);

const searchValue3 = `export type PatchAccessAccessReviewDetailByIdApiArg = {
  /** A UUID string identifying this access review_ vendor. */
  id: string;
  accessReviewVendor: AccessReviewVendor;
};`
const replaceValue3 = `export type PatchAccessAccessReviewDetailByIdApiArg = {
  /** A UUID string identifying this access review_ vendor. */
  id: string;
  accessReviewVendor: Partial<AccessReviewVendor>;
};`
const updated3 = updated2.replace(searchValue3, replaceValue3);

const searchValue4 = `access_review_review_account_type?: string;`
const replaceValue4 = `access_review_review_account_type?: AccessReviewVendor[];`
const updated4 = updated3.replace(searchValue4, replaceValue4);

  // console.log(data.slice(0, 1000));
  
  // Write to the file asynchronously
  fs.writeFile(filePath, updated4, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
    console.log("vistarEndpoints has been updated successfully.");
  });
});
