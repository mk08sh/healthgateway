//-------------------------------------------------------------------------
// Copyright © 2019 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//-------------------------------------------------------------------------
namespace HealthGateway.Common.Authorization
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authorization;

    public class UserAuthorizationHandler : AuthorizationHandler<UserIsPatientRequirement, string>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, UserIsPatientRequirement requirement, string hdid)
        {
            string hdidClaim = context?.User.FindFirst(c => c.Type == "hdid").Value;

            // We custom map the subject id to a custom hdid claim inside the JWT, so we need to check that it
            // matches what is being used for the target subject
            if (!string.Equals(hdidClaim, hdid, System.StringComparison.Ordinal))
            {
                #pragma warning disable CA1303 // Do not pass literals as localized parameters
                System.Console.WriteLine(@"hdid matches JWT");
                #pragma warning restore CA1303 // Do not pass literals as localized parameters

                return Task.CompletedTask;
            }
 
            context.Succeed(requirement);

            return Task.CompletedTask;
        }
    }
}