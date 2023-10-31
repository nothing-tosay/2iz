import router from "next/router";

function CustomLink(props) {
  const linkHref = props.href;

  function customLinkOnClick(e) {
    e.preventDefault();
    router.push(linkHref);
  }

  return (
    <a href={linkHref} onClick={customLinkOnClick} className={props.className}>
      {props.children}
    </a>
  );
}

export default CustomLink;
