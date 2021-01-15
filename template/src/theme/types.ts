type defaultComponentProps = {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
};

type defaultTextProps = {
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
};

export type Theme = {
  primaryColor?: string;
  secondaryColor?: string;
  errorColor?: string;
  color?: string;
  fontSize?: string;
  fontFamily?: string;

  button?: {
    fontWeight?: string;
    borderRadius?: string;
    boxShadow?: string;
    height?: string;
    minWidth?: string;

    secondary?: {
      color?: string;
      backgroundColor?: string;
    };

    outline: {
      color?: string;
      backgroundColor?: string;
      borderWidth?: string;
      borderColor?: string;
    };
  } & defaultComponentProps;

  input?: {
    height?: string;
    backgroundColor?: string;
    borderColor?: string;
    fontSize?: string;
    borderRadius?: string;
  };

  checkbox?: {
    borderWidth?: string;
    borderColorChecked?: string;
    backgroundColorChecked?: string;
    borderColor?: string;
  };

  text?: {
    h1?: {
      marginBottom?: string;
    } & defaultTextProps;
    h2?: {
      marginBottom?: string;
    } & defaultTextProps;
    sm?: defaultTextProps;
    lg?: defaultTextProps;
  } & defaultTextProps;

  datepicker?: {
    locale?: string;
    format?: string;
    placeholder?: string;
    placeholderPeriod?: string;
  };
};
