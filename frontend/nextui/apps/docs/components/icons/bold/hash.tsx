import {IconSvgProps} from "@/types";

export const HashBoldIcon = ({size = 24, width, height, ...props}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M10.4199 13.4181H13.2599L13.5799 10.5781H10.7399L10.4199 13.4181Z"
      fill="currentColor"
    />
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.82 10.58H15.05L14.73 13.43H18.1C18.5 13.43 18.83 13.76 18.83 14.16C18.83 14.56 18.5 14.89 18.1 14.89H14.57L14.16 18.55C14.12 18.92 13.8 19.2 13.43 19.2C13.4 19.2 13.38 19.2 13.35 19.2C12.95 19.16 12.66 18.79 12.7 18.39L13.09 14.89H10.25L9.84 18.55C9.8 18.92 9.48 19.2 9.11 19.2C9.08 19.2 9.06 19.2 9.03 19.2C8.63 19.16 8.34 18.79 8.38 18.39L8.77 14.89H5.18C4.78 14.89 4.45 14.56 4.45 14.16C4.45 13.76 4.78 13.43 5.18 13.43H8.95L9.27 10.58H5.9C5.5 10.58 5.17 10.25 5.17 9.85C5.17 9.45 5.5 9.12 5.9 9.12H9.43L9.84 5.46C9.88 5.06 10.25 4.77 10.65 4.81C11.05 4.85 11.34 5.22 11.3 5.62L10.91 9.12H13.75L14.16 5.46C14.21 5.06 14.57 4.77 14.97 4.81C15.37 4.85 15.66 5.22 15.62 5.62L15.23 9.12H18.84C19.24 9.12 19.57 9.45 19.57 9.85C19.57 10.25 19.22 10.58 18.82 10.58Z"
      fill="currentColor"
    />
  </svg>
);
