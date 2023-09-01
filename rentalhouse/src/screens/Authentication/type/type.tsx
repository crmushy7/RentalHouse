export type CustomInputFieldProps = {
  type: string;
  backgroundColor: string;
  border: string;
  borderRadius: number;
  fontSize: string;
  padding: number;
  width: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export type CustomLinkprop = {
  title: string;
  linkto: string;
};

export type CustomButtonProps = {
  backgroundColor: string;
  borderRadius: number;
  name: string;
  color: string;
  fontSize: number;
  border: string;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  onClick: () => void;
};
