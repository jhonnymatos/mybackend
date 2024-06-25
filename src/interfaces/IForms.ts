interface IForms {
    id: number;
  fullName: string;
  email: string;
  phone: string;
  state: string;
  crp: string;
  approach: string;
  specialty: string;
  specialty2: string | null;
  specialty3: string | null;
  formation: string;
  formationArea: string;
  formationArea2: string | null;
  service: string;
  service2: string | null;
  service3: string | null;
  gender: string;
  serviceModality: string;
  pounds: string;
  shortBio: string;
  fullBio: string;
}

export default IForms;