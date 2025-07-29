import userService from "./user.service.ts";
import userRoutes from "./user.routes.ts";
import { defineBlock } from "@gaman/core/block";

export default defineBlock({
  services: { userService: userService },
  path: "/user",
  routes: [userRoutes]
});
