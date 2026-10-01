import Link from "next/link";
import { site, telHref } from "@/config/site";
import { ArrowRightIcon, PhoneIcon } from "./Icons";

/**
 * Mobile action bar: lets visitors call with a single tap.
 * Visible only below `lg`, where the header call button is icon-only
 * and the navigation is collapsed.
 */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 backdrop-blur lg:hidden">
      <div className="container-x grid grid-cols-2 gap-3 py-3">
        <a
          href={telHref}
          className="btn bg-brand-400 text-accent-950 hover:bg-brand-300"
          aria-label={`Jetzt anrufen: ${site.contact.phoneDisplay}`}
        >
          <PhoneIcon className="h-4 w-4" />
          Jetzt anrufen
        </a>
        <Link href="/kontakt#anfrage" className="btn-outline">
          Angebot anfragen
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
