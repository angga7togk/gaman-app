import articleService from "./article.service.ts";
import articleRoutes from "./article.routes.ts";
import { defineBlock } from "@gaman/core/block";

export default defineBlock({
  services: { articleService: articleService },
  path: "/article",
  routes: [articleRoutes]
});
