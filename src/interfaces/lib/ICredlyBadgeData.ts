interface BadgeMetadata {
  id: string;
  issued_at: string;
  name: string;
  description: string;
  image?: string;
  show?: boolean;
}

type CombinedBadgesMetadata = Record<string, BadgeMetadata>;

export type ICredlyBadgeData = CombinedBadgesMetadata;

export type { BadgeMetadata, CombinedBadgesMetadata };
