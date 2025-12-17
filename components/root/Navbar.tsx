// components/navbar/Navbar.server.tsx
import { getPayload } from "payload";
import config from "@/payload.config";
import NavbarContent from "./NavbarContent";

export default async function Navbar() {
  const payload = await getPayload({ config });

  const { docs: products } = await payload.find({
    collection: "products",
    limit: 3,
    depth: 0,
  });

  return <NavbarContent products={products} />;
}
