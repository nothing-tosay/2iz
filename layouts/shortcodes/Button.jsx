import CustomLink from "@layouts/Link"
import Link from "next/link"

const Button = ({ href, type, rel, children }) => {
  return (
    <CustomLink prefetch={false} href={href} target="_blank" rel={`noopener noreferrer ${rel?(rel==="follow"?"":rel):"nofollow"}`} className={`btn mb-4 me-4 ${type === "outline"? "btn-outline-primary" : "btn-primary"}`}>
      {children}
    </CustomLink>
  )
}

export default Button
