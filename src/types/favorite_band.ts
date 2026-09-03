export type FRB = {
        picture: string;
        name: string;
        description: string;
        members?: string[];
        img_members?: string[];
    };

export type FRBCardProps = { 
    band: FRB;
};