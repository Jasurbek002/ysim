import { Type, Static } from "@sinclair/typebox";

const NetSchema = Type.Object({
 companyName:Type.String()
});
type NetData = Static<typeof NetSchema>;






export { NetSchema, NetData };
