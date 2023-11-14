import { Metadata } from "next";
import Search from "@/app/ui/search";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  // const customers = await fetchFilteredCustomers();
  // return <h1>Hello Customers Page</h1>;
  const query = searchParams?.query || "";

  const totalPages = await fetchFilteredCustomers(query);
  return (
    <main>
      <CustomersTable customers={totalPages} />
    </main>
  );
}
