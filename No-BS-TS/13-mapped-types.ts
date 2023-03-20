/****
 *
 * A mapped type is a generic type which uses a union of PropertyKeys
 * (frequently created via a keyof) to iterate through keys to create
 * a type:
 *
 * */

interface AWSUser {
  name: string;
  [key: string]: string | number | boolean;
}

const Saranya: AWSUser = {
  name: "Saranya",
  patientid: 1523,
  email: "saranyas@sense7ai.com",
};

type AppTypes =
  | "Browser"
  | "Education"
  | "Social Media"
  | "Entertainment"
  | "Productivity"
  | "Office Tools"
  | "Games";

interface FavApps {
  [key: string]: AppTypes;
}

interface GoodApps {
  [key: string]: AppTypes;
}

interface BadApps {
  [key: string]: AppTypes;
}

const myFavApps: FavApps = {
  firefox: "Browser",
  youtube: "Education",
};

const goodApps: GoodApps = {
  youtube: "Education",
  xodo: "Education",
  twitter: "Social Media",
  notion: "Productivity",
};

const badApps: BadApps = {
  pubg: "Games",
  instagram: "Social Media",
  hotstar: "Entertainment",
};

type Installer = {
  install: (app: string) => void;
  uninstall: (app: string) => void;
};

const letsInstall = (apps: GoodApps, installer: Installer) => {
  for (const app in apps) {
    console.log(app);
  }
};

const installer: Installer = {
  install: (app: string) => {
    console.log(`${app} App Installed`);
  },
  uninstall: (app: string) => {
    console.log(`${app} App Uninstalled`);
  },
};

letsInstall(myFavApps, installer);

// TODO lets try this in C#
// installer must only install good apps
