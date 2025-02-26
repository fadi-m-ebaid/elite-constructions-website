export interface BaseType {
  id?: string;
  type?: "services" | "projects" | "community" | "products" | "client" |string;
}

export interface StyleType{
  className?: string;
}