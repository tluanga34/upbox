
export default function DocumentTitle ({ title, children }) {
  title && (document.title = title);
  return <>{children}</>

}