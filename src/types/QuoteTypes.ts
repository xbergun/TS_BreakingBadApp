export default interface QuoteProps {
    items: [];
    status: "idle" | "pending" | "succeeded" | "failed";
}