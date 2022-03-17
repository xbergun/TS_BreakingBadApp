export default interface CharacterInitialStateProps { 
    items: any;
    status: "idle" | "pending" | "succeeded" | "failed";
    error: boolean;
    page: number;
    hasNextPage: boolean;

}
