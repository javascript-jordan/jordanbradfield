import type { BadgeMetadata, CombinedBadgesMetadata, ICredlyBadgeData } from "@/interfaces";
import { describe, expectTypeOf, it } from "vitest";

describe("ICredlyBadgeData exports", () => {
  it("should export ICredlyBadgeData from the interfaces barrel", () => {
    expectTypeOf<ICredlyBadgeData>().toMatchTypeOf<CombinedBadgesMetadata>();
  });

  it("should export a BadgeMetadata type with the correct fields", () => {
    expectTypeOf<BadgeMetadata>().toEqualTypeOf<{
      id: string;
      issued_at: string;
      name: string;
      description: string;
    }>();
  });

  it("should export CombinedBadgesMetadata as a record keyed by badge folder name", () => {
    expectTypeOf<CombinedBadgesMetadata>().toEqualTypeOf<Record<string, BadgeMetadata>>();
  });
});
