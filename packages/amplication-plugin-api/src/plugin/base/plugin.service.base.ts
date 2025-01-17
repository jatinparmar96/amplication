/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Plugin } from "../../../prisma/generated-prisma-client";
import { PluginFindManyArgs } from "./PluginFindManyArgs";
import { PluginFindUniqueArgs } from "./PluginFindUniqueArgs";

export class PluginServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PluginFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PluginFindManyArgs>
  ): Promise<number> {
    return this.prisma.plugin.count(args as PluginFindManyArgs);
  }

  async findMany<T extends Prisma.PluginFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PluginFindManyArgs>
  ): Promise<Plugin[]> {
    return this.prisma.plugin.findMany(args);
  }
  async findOne<T extends Prisma.PluginFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PluginFindUniqueArgs>
  ): Promise<Plugin | null> {
    return this.prisma.plugin.findUnique(args as PluginFindUniqueArgs);
  }
  async create<T extends Prisma.PluginCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PluginCreateArgs>
  ): Promise<Plugin> {
    return this.prisma.plugin.create<T>(args);
  }
  async update<T extends Prisma.PluginUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PluginUpdateArgs>
  ): Promise<Plugin> {
    return this.prisma.plugin.update<T>(args);
  }
  async delete<T extends Prisma.PluginDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PluginDeleteArgs>
  ): Promise<Plugin> {
    return this.prisma.plugin.delete(args);
  }
}
