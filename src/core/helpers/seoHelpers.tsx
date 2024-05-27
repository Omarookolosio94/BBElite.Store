import { logoImg } from "core/consts/images";
import { Helmet } from "react-helmet";

interface Props {
  title?: string;
  description?: string;
}

export const addMetaData = ({ title = "", description = "" }: Props) => {
  return (
    <div>
      <Helmet>
        <meta
          property="og:title"
          content={`BB Elite Apparels | ${title}`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logoImg} />
        <meta property="og:site_name" content="BBElites" />
        <meta
          name="twitter:title"
          content={`BB Elite Apparels | Nigerian Clothing Brand | ${title}`}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logoImg} />
      </Helmet>
    </div>
  );
};
