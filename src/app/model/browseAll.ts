export interface BrowseCategory {
    title: {
        transformedLabel: string;
    };
    artwork: {
        sources: Array<{
            url: string;
            width: number | null;
            height: number | null;
        }>;
    };
    backgroundColor: {
        hex: string;
    };
}
