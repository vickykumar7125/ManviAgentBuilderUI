"use client";

import Image from "next/image";

export const SIDEBAR_IMAGE_PATH = "/AdobeStock_383765792.jpeg";

export function SidebarBrandImage() {
  return (
    <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-md">
      <Image
        src={SIDEBAR_IMAGE_PATH}
        alt=""
        fill
        className="object-cover opacity-90"
        sizes="(max-width: 768px) 18rem, 16rem"
      />
    </div>
  );
}
