export default function Icon({ name, size = 18, stroke = 1.8 }) {
  const paths = {
    github: (
      <>
        <path d="M9 19c-4 1-4-2-5-2m10 4v-3.9c0-.9.1-1.4-.4-1.9 2.8-.3 5.4-1.4 5.4-6.1a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C5.6-.8 4.6-.5 4.6-.5a4.3 4.3 0 0 0-.1 3.3A4.7 4.7 0 0 0 3.2 5.9c0 4.7 2.6 5.8 5.4 6.1-.4.4-.4 1-.4 1.9V18" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7.5v.01M12 17v-4.2c0-1.6 3-1.8 3 0V17M12 12.1c.5-1.7 3-2 3.8-.2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <>
        <path d="M6 2h3l1.5 4-2 1.6a15 15 0 0 0 6.9 6.9L17 12.5l4 1.5v3c0 1.1-.9 2-2 2C10.7 19 3 11.3 3 3a1 1 0 0 1 1-1h2z" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M14 3v5h5M8 13h8M8 17h6" />
      </>
    ),
    leetcode: (
      <>
        <path d="M14.5 4.5 9 10l5.5 5.5" />
        <path d="M9 10h10" />
        <path d="M5 5.5 2.5 8a5 5 0 0 0 0 7l3.8 3.8a5 5 0 0 0 7.1 0l1.1-1.1" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M14 5h5v5" />
        <path d="m19 5-8 8" />
        <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
