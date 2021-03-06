import "reflect-metadata";
import { Container } from "inversify";

import SERVICE_IDENTIFIER, {
  DELEGATE_IDENTIFIER
} from "@/constants/serviceIdentifiers";
import {
  IAuthenticationService,
  IImmsService,
  IConfigService,
  IHttpDelegate,
  IPatientService,
  IMedicationService
} from "@/services/interfaces";
import { RestAuthenticationService } from "@/services/restAuthService";
import { RestImmsService } from "@/services/restImmsService";
import { RestConfigService } from "@/services/restConfigService";
import { RestPatientService } from "./services/restPatientService";
import { RestMedicationService } from "./services/restMedicationService";
import HttpDelegate from "@/services/httpDelegate";

let container = new Container();
container
  .bind<IConfigService>(SERVICE_IDENTIFIER.ConfigService)
  .to(RestConfigService)
  .inSingletonScope();
container
  .bind<IAuthenticationService>(SERVICE_IDENTIFIER.AuthenticationService)
  .to(RestAuthenticationService)
  .inSingletonScope();
container
  .bind<IImmsService>(SERVICE_IDENTIFIER.ImmsService)
  .to(RestImmsService)
  .inSingletonScope();
container
  .bind<IPatientService>(SERVICE_IDENTIFIER.PatientService)
  .to(RestPatientService)
  .inSingletonScope();
container
  .bind<IMedicationService>(SERVICE_IDENTIFIER.MedicationService)
  .to(RestMedicationService)
  .inSingletonScope();
container
  .bind<IHttpDelegate>(DELEGATE_IDENTIFIER.HttpDelegate)
  .to(HttpDelegate)
  .inSingletonScope();

export default container;
