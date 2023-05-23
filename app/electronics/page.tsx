import { NextPage } from "next";

interface Props { }

//  @ts-expect-error Async Server Component 
const Electronics: NextPage<Props> = async () => {
  const { product_category } = await fetch("http://localhost:3000/api/category?name=electronics").then((res) => res.json());
  type ProductCategory = {
    slug: string;
    title: string;
    subtitle: string;
    thumbnail: string;
  }[];

  return (
    <div>
      {(
        product_category as ProductCategory
      ).map((item) => {
        return <div key={item.slug}>{item.title}</div>
      })}
    </div>
  )
};

export default Electronics;
