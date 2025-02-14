export interface Planet {
  name: string;
  tagline: string;
  tagline_icon: string;
  picture: string;
  textureUrl: string;
  description: string;
  distanceFromSun: string;
  yearLength: string;
  numberOfMoons: number;
  namesake: string;
  rings: {
    url_exists: boolean;
  };
  spaceTexture_url: string;
}
