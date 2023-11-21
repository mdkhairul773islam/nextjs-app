import product from "@/utilities/product";
export default function handler(req, res) {
  res.status(200).json(product)
}