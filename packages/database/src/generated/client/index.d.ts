
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Generation
 * 
 */
export type Generation = $Result.DefaultSelection<Prisma.$GenerationPayload>
/**
 * Model CollectionPage
 * 
 */
export type CollectionPage = $Result.DefaultSelection<Prisma.$CollectionPagePayload>
/**
 * Model CollectionGeneration
 * 
 */
export type CollectionGeneration = $Result.DefaultSelection<Prisma.$CollectionGenerationPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model UsageMonthly
 * 
 */
export type UsageMonthly = $Result.DefaultSelection<Prisma.$UsageMonthlyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JobStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  DONE: 'DONE',
  FAILED: 'FAILED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const SubscriptionPlan: {
  STARTER: 'STARTER',
  PRO: 'PRO',
  SCALE: 'SCALE'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]

}

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type SubscriptionPlan = $Enums.SubscriptionPlan

export const SubscriptionPlan: typeof $Enums.SubscriptionPlan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generation`: Exposes CRUD operations for the **Generation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generations
    * const generations = await prisma.generation.findMany()
    * ```
    */
  get generation(): Prisma.GenerationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionPage`: Exposes CRUD operations for the **CollectionPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionPages
    * const collectionPages = await prisma.collectionPage.findMany()
    * ```
    */
  get collectionPage(): Prisma.CollectionPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionGeneration`: Exposes CRUD operations for the **CollectionGeneration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionGenerations
    * const collectionGenerations = await prisma.collectionGeneration.findMany()
    * ```
    */
  get collectionGeneration(): Prisma.CollectionGenerationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageMonthly`: Exposes CRUD operations for the **UsageMonthly** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageMonthlies
    * const usageMonthlies = await prisma.usageMonthly.findMany()
    * ```
    */
  get usageMonthly(): Prisma.UsageMonthlyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    Product: 'Product',
    Generation: 'Generation',
    CollectionPage: 'CollectionPage',
    CollectionGeneration: 'CollectionGeneration',
    Job: 'Job',
    UsageMonthly: 'UsageMonthly'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "product" | "generation" | "collectionPage" | "collectionGeneration" | "job" | "usageMonthly"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Generation: {
        payload: Prisma.$GenerationPayload<ExtArgs>
        fields: Prisma.GenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          findFirst: {
            args: Prisma.GenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          findMany: {
            args: Prisma.GenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>[]
          }
          create: {
            args: Prisma.GenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          createMany: {
            args: Prisma.GenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>[]
          }
          delete: {
            args: Prisma.GenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          update: {
            args: Prisma.GenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          deleteMany: {
            args: Prisma.GenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>[]
          }
          upsert: {
            args: Prisma.GenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationPayload>
          }
          aggregate: {
            args: Prisma.GenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneration>
          }
          groupBy: {
            args: Prisma.GenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenerationCountArgs<ExtArgs>
            result: $Utils.Optional<GenerationCountAggregateOutputType> | number
          }
        }
      }
      CollectionPage: {
        payload: Prisma.$CollectionPagePayload<ExtArgs>
        fields: Prisma.CollectionPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>
          }
          findFirst: {
            args: Prisma.CollectionPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>
          }
          findMany: {
            args: Prisma.CollectionPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>[]
          }
          create: {
            args: Prisma.CollectionPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>
          }
          createMany: {
            args: Prisma.CollectionPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>[]
          }
          delete: {
            args: Prisma.CollectionPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>
          }
          update: {
            args: Prisma.CollectionPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>
          }
          deleteMany: {
            args: Prisma.CollectionPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>[]
          }
          upsert: {
            args: Prisma.CollectionPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPagePayload>
          }
          aggregate: {
            args: Prisma.CollectionPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionPage>
          }
          groupBy: {
            args: Prisma.CollectionPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionPageCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionPageCountAggregateOutputType> | number
          }
        }
      }
      CollectionGeneration: {
        payload: Prisma.$CollectionGenerationPayload<ExtArgs>
        fields: Prisma.CollectionGenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionGenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionGenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>
          }
          findFirst: {
            args: Prisma.CollectionGenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionGenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>
          }
          findMany: {
            args: Prisma.CollectionGenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>[]
          }
          create: {
            args: Prisma.CollectionGenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>
          }
          createMany: {
            args: Prisma.CollectionGenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionGenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>[]
          }
          delete: {
            args: Prisma.CollectionGenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>
          }
          update: {
            args: Prisma.CollectionGenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>
          }
          deleteMany: {
            args: Prisma.CollectionGenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionGenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionGenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>[]
          }
          upsert: {
            args: Prisma.CollectionGenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionGenerationPayload>
          }
          aggregate: {
            args: Prisma.CollectionGenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionGeneration>
          }
          groupBy: {
            args: Prisma.CollectionGenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionGenerationCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionGenerationCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      UsageMonthly: {
        payload: Prisma.$UsageMonthlyPayload<ExtArgs>
        fields: Prisma.UsageMonthlyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageMonthlyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageMonthlyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>
          }
          findFirst: {
            args: Prisma.UsageMonthlyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageMonthlyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>
          }
          findMany: {
            args: Prisma.UsageMonthlyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>[]
          }
          create: {
            args: Prisma.UsageMonthlyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>
          }
          createMany: {
            args: Prisma.UsageMonthlyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageMonthlyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>[]
          }
          delete: {
            args: Prisma.UsageMonthlyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>
          }
          update: {
            args: Prisma.UsageMonthlyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>
          }
          deleteMany: {
            args: Prisma.UsageMonthlyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageMonthlyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageMonthlyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>[]
          }
          upsert: {
            args: Prisma.UsageMonthlyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMonthlyPayload>
          }
          aggregate: {
            args: Prisma.UsageMonthlyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageMonthly>
          }
          groupBy: {
            args: Prisma.UsageMonthlyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageMonthlyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageMonthlyCountArgs<ExtArgs>
            result: $Utils.Optional<UsageMonthlyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    product?: ProductOmit
    generation?: GenerationOmit
    collectionPage?: CollectionPageOmit
    collectionGeneration?: CollectionGenerationOmit
    job?: JobOmit
    usageMonthly?: UsageMonthlyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    usageMonthly: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    usageMonthly?: boolean | UserCountOutputTypeCountUsageMonthlyArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsageMonthlyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageMonthlyWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    products: number
    collectionPages: number
    jobs: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProjectCountOutputTypeCountProductsArgs
    collectionPages?: boolean | ProjectCountOutputTypeCountCollectionPagesArgs
    jobs?: boolean | ProjectCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCollectionPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    plan: $Enums.SubscriptionPlan | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    plan: $Enums.SubscriptionPlan | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    plan: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    plan?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    plan?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    plan?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    createdAt: Date
    plan: $Enums.SubscriptionPlan
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    plan?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    usageMonthly?: boolean | User$usageMonthlyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    plan?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    plan?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    plan?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "createdAt" | "plan", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    usageMonthly?: boolean | User$usageMonthlyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      usageMonthly: Prisma.$UsageMonthlyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      createdAt: Date
      plan: $Enums.SubscriptionPlan
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageMonthly<T extends User$usageMonthlyArgs<ExtArgs> = {}>(args?: Subset<T, User$usageMonthlyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly plan: FieldRef<"User", 'SubscriptionPlan'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.usageMonthly
   */
  export type User$usageMonthlyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    where?: UsageMonthlyWhereInput
    orderBy?: UsageMonthlyOrderByWithRelationInput | UsageMonthlyOrderByWithRelationInput[]
    cursor?: UsageMonthlyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageMonthlyScalarFieldEnum | UsageMonthlyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    userId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Project$productsArgs<ExtArgs>
    collectionPages?: boolean | Project$collectionPagesArgs<ExtArgs>
    jobs?: boolean | Project$jobsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "userId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Project$productsArgs<ExtArgs>
    collectionPages?: boolean | Project$collectionPagesArgs<ExtArgs>
    jobs?: boolean | Project$jobsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
      collectionPages: Prisma.$CollectionPagePayload<ExtArgs>[]
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Project$productsArgs<ExtArgs> = {}>(args?: Subset<T, Project$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collectionPages<T extends Project$collectionPagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$collectionPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobs<T extends Project$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Project$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly userId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.products
   */
  export type Project$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Project.collectionPages
   */
  export type Project$collectionPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    where?: CollectionPageWhereInput
    orderBy?: CollectionPageOrderByWithRelationInput | CollectionPageOrderByWithRelationInput[]
    cursor?: CollectionPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionPageScalarFieldEnum | CollectionPageScalarFieldEnum[]
  }

  /**
   * Project.jobs
   */
  export type Project$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    originalTitle: string | null
    originalDescription: string | null
    price: number | null
    imageUrl: string | null
    imageAlt: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    originalTitle: string | null
    originalDescription: string | null
    price: number | null
    imageUrl: string | null
    imageAlt: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    originalTitle: number
    originalDescription: number
    price: number
    attributes: number
    imageUrl: number
    imageAlt: number
    createdAt: number
    projectId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    originalTitle?: true
    originalDescription?: true
    price?: true
    imageUrl?: true
    imageAlt?: true
    createdAt?: true
    projectId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    originalTitle?: true
    originalDescription?: true
    price?: true
    imageUrl?: true
    imageAlt?: true
    createdAt?: true
    projectId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    originalTitle?: true
    originalDescription?: true
    price?: true
    attributes?: true
    imageUrl?: true
    imageAlt?: true
    createdAt?: true
    projectId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes: JsonValue
    imageUrl: string | null
    imageAlt: string | null
    createdAt: Date
    projectId: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalTitle?: boolean
    originalDescription?: boolean
    price?: boolean
    attributes?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    generation?: boolean | Product$generationArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalTitle?: boolean
    originalDescription?: boolean
    price?: boolean
    attributes?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalTitle?: boolean
    originalDescription?: boolean
    price?: boolean
    attributes?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    originalTitle?: boolean
    originalDescription?: boolean
    price?: boolean
    attributes?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    createdAt?: boolean
    projectId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalTitle" | "originalDescription" | "price" | "attributes" | "imageUrl" | "imageAlt" | "createdAt" | "projectId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    generation?: boolean | Product$generationArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      generation: Prisma.$GenerationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalTitle: string
      originalDescription: string
      price: number
      attributes: Prisma.JsonValue
      imageUrl: string | null
      imageAlt: string | null
      createdAt: Date
      projectId: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generation<T extends Product$generationArgs<ExtArgs> = {}>(args?: Subset<T, Product$generationArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly originalTitle: FieldRef<"Product", 'String'>
    readonly originalDescription: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly attributes: FieldRef<"Product", 'Json'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly imageAlt: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly projectId: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.generation
   */
  export type Product$generationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    where?: GenerationWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Generation
   */

  export type AggregateGeneration = {
    _count: GenerationCountAggregateOutputType | null
    _avg: GenerationAvgAggregateOutputType | null
    _sum: GenerationSumAggregateOutputType | null
    _min: GenerationMinAggregateOutputType | null
    _max: GenerationMaxAggregateOutputType | null
  }

  export type GenerationAvgAggregateOutputType = {
    seoScore: number | null
  }

  export type GenerationSumAggregateOutputType = {
    seoScore: number | null
  }

  export type GenerationMinAggregateOutputType = {
    id: string | null
    optimizedTitle: string | null
    optimizedDescription: string | null
    seoKeywords: string | null
    seoScore: number | null
    createdAt: Date | null
    productId: string | null
  }

  export type GenerationMaxAggregateOutputType = {
    id: string | null
    optimizedTitle: string | null
    optimizedDescription: string | null
    seoKeywords: string | null
    seoScore: number | null
    createdAt: Date | null
    productId: string | null
  }

  export type GenerationCountAggregateOutputType = {
    id: number
    optimizedTitle: number
    optimizedDescription: number
    seoKeywords: number
    seoScore: number
    createdAt: number
    productId: number
    _all: number
  }


  export type GenerationAvgAggregateInputType = {
    seoScore?: true
  }

  export type GenerationSumAggregateInputType = {
    seoScore?: true
  }

  export type GenerationMinAggregateInputType = {
    id?: true
    optimizedTitle?: true
    optimizedDescription?: true
    seoKeywords?: true
    seoScore?: true
    createdAt?: true
    productId?: true
  }

  export type GenerationMaxAggregateInputType = {
    id?: true
    optimizedTitle?: true
    optimizedDescription?: true
    seoKeywords?: true
    seoScore?: true
    createdAt?: true
    productId?: true
  }

  export type GenerationCountAggregateInputType = {
    id?: true
    optimizedTitle?: true
    optimizedDescription?: true
    seoKeywords?: true
    seoScore?: true
    createdAt?: true
    productId?: true
    _all?: true
  }

  export type GenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation to aggregate.
     */
    where?: GenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generations to fetch.
     */
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generations
    **/
    _count?: true | GenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenerationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenerationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerationMaxAggregateInputType
  }

  export type GetGenerationAggregateType<T extends GenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneration[P]>
      : GetScalarType<T[P], AggregateGeneration[P]>
  }




  export type GenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationWhereInput
    orderBy?: GenerationOrderByWithAggregationInput | GenerationOrderByWithAggregationInput[]
    by: GenerationScalarFieldEnum[] | GenerationScalarFieldEnum
    having?: GenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerationCountAggregateInputType | true
    _avg?: GenerationAvgAggregateInputType
    _sum?: GenerationSumAggregateInputType
    _min?: GenerationMinAggregateInputType
    _max?: GenerationMaxAggregateInputType
  }

  export type GenerationGroupByOutputType = {
    id: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt: Date
    productId: string
    _count: GenerationCountAggregateOutputType | null
    _avg: GenerationAvgAggregateOutputType | null
    _sum: GenerationSumAggregateOutputType | null
    _min: GenerationMinAggregateOutputType | null
    _max: GenerationMaxAggregateOutputType | null
  }

  type GetGenerationGroupByPayload<T extends GenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerationGroupByOutputType[P]>
            : GetScalarType<T[P], GenerationGroupByOutputType[P]>
        }
      >
    >


  export type GenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optimizedTitle?: boolean
    optimizedDescription?: boolean
    seoKeywords?: boolean
    seoScore?: boolean
    createdAt?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generation"]>

  export type GenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optimizedTitle?: boolean
    optimizedDescription?: boolean
    seoKeywords?: boolean
    seoScore?: boolean
    createdAt?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generation"]>

  export type GenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optimizedTitle?: boolean
    optimizedDescription?: boolean
    seoKeywords?: boolean
    seoScore?: boolean
    createdAt?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generation"]>

  export type GenerationSelectScalar = {
    id?: boolean
    optimizedTitle?: boolean
    optimizedDescription?: boolean
    seoKeywords?: boolean
    seoScore?: boolean
    createdAt?: boolean
    productId?: boolean
  }

  export type GenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "optimizedTitle" | "optimizedDescription" | "seoKeywords" | "seoScore" | "createdAt" | "productId", ExtArgs["result"]["generation"]>
  export type GenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type GenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type GenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $GenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Generation"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      optimizedTitle: string
      optimizedDescription: string
      seoKeywords: string
      seoScore: number
      createdAt: Date
      productId: string
    }, ExtArgs["result"]["generation"]>
    composites: {}
  }

  type GenerationGetPayload<S extends boolean | null | undefined | GenerationDefaultArgs> = $Result.GetResult<Prisma.$GenerationPayload, S>

  type GenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerationCountAggregateInputType | true
    }

  export interface GenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Generation'], meta: { name: 'Generation' } }
    /**
     * Find zero or one Generation that matches the filter.
     * @param {GenerationFindUniqueArgs} args - Arguments to find a Generation
     * @example
     * // Get one Generation
     * const generation = await prisma.generation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenerationFindUniqueArgs>(args: SelectSubset<T, GenerationFindUniqueArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenerationFindUniqueOrThrowArgs} args - Arguments to find a Generation
     * @example
     * // Get one Generation
     * const generation = await prisma.generation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, GenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationFindFirstArgs} args - Arguments to find a Generation
     * @example
     * // Get one Generation
     * const generation = await prisma.generation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenerationFindFirstArgs>(args?: SelectSubset<T, GenerationFindFirstArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationFindFirstOrThrowArgs} args - Arguments to find a Generation
     * @example
     * // Get one Generation
     * const generation = await prisma.generation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, GenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generations
     * const generations = await prisma.generation.findMany()
     * 
     * // Get first 10 Generations
     * const generations = await prisma.generation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generationWithIdOnly = await prisma.generation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenerationFindManyArgs>(args?: SelectSubset<T, GenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generation.
     * @param {GenerationCreateArgs} args - Arguments to create a Generation.
     * @example
     * // Create one Generation
     * const Generation = await prisma.generation.create({
     *   data: {
     *     // ... data to create a Generation
     *   }
     * })
     * 
     */
    create<T extends GenerationCreateArgs>(args: SelectSubset<T, GenerationCreateArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generations.
     * @param {GenerationCreateManyArgs} args - Arguments to create many Generations.
     * @example
     * // Create many Generations
     * const generation = await prisma.generation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenerationCreateManyArgs>(args?: SelectSubset<T, GenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generations and returns the data saved in the database.
     * @param {GenerationCreateManyAndReturnArgs} args - Arguments to create many Generations.
     * @example
     * // Create many Generations
     * const generation = await prisma.generation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generations and only return the `id`
     * const generationWithIdOnly = await prisma.generation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, GenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Generation.
     * @param {GenerationDeleteArgs} args - Arguments to delete one Generation.
     * @example
     * // Delete one Generation
     * const Generation = await prisma.generation.delete({
     *   where: {
     *     // ... filter to delete one Generation
     *   }
     * })
     * 
     */
    delete<T extends GenerationDeleteArgs>(args: SelectSubset<T, GenerationDeleteArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generation.
     * @param {GenerationUpdateArgs} args - Arguments to update one Generation.
     * @example
     * // Update one Generation
     * const generation = await prisma.generation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenerationUpdateArgs>(args: SelectSubset<T, GenerationUpdateArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generations.
     * @param {GenerationDeleteManyArgs} args - Arguments to filter Generations to delete.
     * @example
     * // Delete a few Generations
     * const { count } = await prisma.generation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenerationDeleteManyArgs>(args?: SelectSubset<T, GenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generations
     * const generation = await prisma.generation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenerationUpdateManyArgs>(args: SelectSubset<T, GenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generations and returns the data updated in the database.
     * @param {GenerationUpdateManyAndReturnArgs} args - Arguments to update many Generations.
     * @example
     * // Update many Generations
     * const generation = await prisma.generation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generations and only return the `id`
     * const generationWithIdOnly = await prisma.generation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, GenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Generation.
     * @param {GenerationUpsertArgs} args - Arguments to update or create a Generation.
     * @example
     * // Update or create a Generation
     * const generation = await prisma.generation.upsert({
     *   create: {
     *     // ... data to create a Generation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generation we want to update
     *   }
     * })
     */
    upsert<T extends GenerationUpsertArgs>(args: SelectSubset<T, GenerationUpsertArgs<ExtArgs>>): Prisma__GenerationClient<$Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationCountArgs} args - Arguments to filter Generations to count.
     * @example
     * // Count the number of Generations
     * const count = await prisma.generation.count({
     *   where: {
     *     // ... the filter for the Generations we want to count
     *   }
     * })
    **/
    count<T extends GenerationCountArgs>(
      args?: Subset<T, GenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenerationAggregateArgs>(args: Subset<T, GenerationAggregateArgs>): Prisma.PrismaPromise<GetGenerationAggregateType<T>>

    /**
     * Group by Generation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenerationGroupByArgs['orderBy'] }
        : { orderBy?: GenerationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Generation model
   */
  readonly fields: GenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Generation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Generation model
   */
  interface GenerationFieldRefs {
    readonly id: FieldRef<"Generation", 'String'>
    readonly optimizedTitle: FieldRef<"Generation", 'String'>
    readonly optimizedDescription: FieldRef<"Generation", 'String'>
    readonly seoKeywords: FieldRef<"Generation", 'String'>
    readonly seoScore: FieldRef<"Generation", 'Int'>
    readonly createdAt: FieldRef<"Generation", 'DateTime'>
    readonly productId: FieldRef<"Generation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Generation findUnique
   */
  export type GenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generation to fetch.
     */
    where: GenerationWhereUniqueInput
  }

  /**
   * Generation findUniqueOrThrow
   */
  export type GenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generation to fetch.
     */
    where: GenerationWhereUniqueInput
  }

  /**
   * Generation findFirst
   */
  export type GenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generation to fetch.
     */
    where?: GenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generations to fetch.
     */
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generations.
     */
    cursor?: GenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generations.
     */
    distinct?: GenerationScalarFieldEnum | GenerationScalarFieldEnum[]
  }

  /**
   * Generation findFirstOrThrow
   */
  export type GenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generation to fetch.
     */
    where?: GenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generations to fetch.
     */
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generations.
     */
    cursor?: GenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generations.
     */
    distinct?: GenerationScalarFieldEnum | GenerationScalarFieldEnum[]
  }

  /**
   * Generation findMany
   */
  export type GenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter, which Generations to fetch.
     */
    where?: GenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generations to fetch.
     */
    orderBy?: GenerationOrderByWithRelationInput | GenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generations.
     */
    cursor?: GenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generations.
     */
    distinct?: GenerationScalarFieldEnum | GenerationScalarFieldEnum[]
  }

  /**
   * Generation create
   */
  export type GenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a Generation.
     */
    data: XOR<GenerationCreateInput, GenerationUncheckedCreateInput>
  }

  /**
   * Generation createMany
   */
  export type GenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generations.
     */
    data: GenerationCreateManyInput | GenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation createManyAndReturn
   */
  export type GenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * The data used to create many Generations.
     */
    data: GenerationCreateManyInput | GenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Generation update
   */
  export type GenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a Generation.
     */
    data: XOR<GenerationUpdateInput, GenerationUncheckedUpdateInput>
    /**
     * Choose, which Generation to update.
     */
    where: GenerationWhereUniqueInput
  }

  /**
   * Generation updateMany
   */
  export type GenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generations.
     */
    data: XOR<GenerationUpdateManyMutationInput, GenerationUncheckedUpdateManyInput>
    /**
     * Filter which Generations to update
     */
    where?: GenerationWhereInput
    /**
     * Limit how many Generations to update.
     */
    limit?: number
  }

  /**
   * Generation updateManyAndReturn
   */
  export type GenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * The data used to update Generations.
     */
    data: XOR<GenerationUpdateManyMutationInput, GenerationUncheckedUpdateManyInput>
    /**
     * Filter which Generations to update
     */
    where?: GenerationWhereInput
    /**
     * Limit how many Generations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Generation upsert
   */
  export type GenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the Generation to update in case it exists.
     */
    where: GenerationWhereUniqueInput
    /**
     * In case the Generation found by the `where` argument doesn't exist, create a new Generation with this data.
     */
    create: XOR<GenerationCreateInput, GenerationUncheckedCreateInput>
    /**
     * In case the Generation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenerationUpdateInput, GenerationUncheckedUpdateInput>
  }

  /**
   * Generation delete
   */
  export type GenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
    /**
     * Filter which Generation to delete.
     */
    where: GenerationWhereUniqueInput
  }

  /**
   * Generation deleteMany
   */
  export type GenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generations to delete
     */
    where?: GenerationWhereInput
    /**
     * Limit how many Generations to delete.
     */
    limit?: number
  }

  /**
   * Generation without action
   */
  export type GenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation
     */
    select?: GenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation
     */
    omit?: GenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenerationInclude<ExtArgs> | null
  }


  /**
   * Model CollectionPage
   */

  export type AggregateCollectionPage = {
    _count: CollectionPageCountAggregateOutputType | null
    _min: CollectionPageMinAggregateOutputType | null
    _max: CollectionPageMaxAggregateOutputType | null
  }

  export type CollectionPageMinAggregateOutputType = {
    id: string | null
    label: string | null
    originalDescription: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type CollectionPageMaxAggregateOutputType = {
    id: string | null
    label: string | null
    originalDescription: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type CollectionPageCountAggregateOutputType = {
    id: number
    label: number
    originalDescription: number
    createdAt: number
    projectId: number
    _all: number
  }


  export type CollectionPageMinAggregateInputType = {
    id?: true
    label?: true
    originalDescription?: true
    createdAt?: true
    projectId?: true
  }

  export type CollectionPageMaxAggregateInputType = {
    id?: true
    label?: true
    originalDescription?: true
    createdAt?: true
    projectId?: true
  }

  export type CollectionPageCountAggregateInputType = {
    id?: true
    label?: true
    originalDescription?: true
    createdAt?: true
    projectId?: true
    _all?: true
  }

  export type CollectionPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionPage to aggregate.
     */
    where?: CollectionPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPages to fetch.
     */
    orderBy?: CollectionPageOrderByWithRelationInput | CollectionPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionPages
    **/
    _count?: true | CollectionPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionPageMaxAggregateInputType
  }

  export type GetCollectionPageAggregateType<T extends CollectionPageAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionPage[P]>
      : GetScalarType<T[P], AggregateCollectionPage[P]>
  }




  export type CollectionPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPageWhereInput
    orderBy?: CollectionPageOrderByWithAggregationInput | CollectionPageOrderByWithAggregationInput[]
    by: CollectionPageScalarFieldEnum[] | CollectionPageScalarFieldEnum
    having?: CollectionPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionPageCountAggregateInputType | true
    _min?: CollectionPageMinAggregateInputType
    _max?: CollectionPageMaxAggregateInputType
  }

  export type CollectionPageGroupByOutputType = {
    id: string
    label: string
    originalDescription: string
    createdAt: Date
    projectId: string
    _count: CollectionPageCountAggregateOutputType | null
    _min: CollectionPageMinAggregateOutputType | null
    _max: CollectionPageMaxAggregateOutputType | null
  }

  type GetCollectionPageGroupByPayload<T extends CollectionPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionPageGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionPageGroupByOutputType[P]>
        }
      >
    >


  export type CollectionPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    originalDescription?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    generation?: boolean | CollectionPage$generationArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPage"]>

  export type CollectionPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    originalDescription?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPage"]>

  export type CollectionPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    originalDescription?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPage"]>

  export type CollectionPageSelectScalar = {
    id?: boolean
    label?: boolean
    originalDescription?: boolean
    createdAt?: boolean
    projectId?: boolean
  }

  export type CollectionPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "originalDescription" | "createdAt" | "projectId", ExtArgs["result"]["collectionPage"]>
  export type CollectionPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    generation?: boolean | CollectionPage$generationArgs<ExtArgs>
  }
  export type CollectionPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CollectionPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CollectionPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionPage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      generation: Prisma.$CollectionGenerationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      originalDescription: string
      createdAt: Date
      projectId: string
    }, ExtArgs["result"]["collectionPage"]>
    composites: {}
  }

  type CollectionPageGetPayload<S extends boolean | null | undefined | CollectionPageDefaultArgs> = $Result.GetResult<Prisma.$CollectionPagePayload, S>

  type CollectionPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionPageCountAggregateInputType | true
    }

  export interface CollectionPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionPage'], meta: { name: 'CollectionPage' } }
    /**
     * Find zero or one CollectionPage that matches the filter.
     * @param {CollectionPageFindUniqueArgs} args - Arguments to find a CollectionPage
     * @example
     * // Get one CollectionPage
     * const collectionPage = await prisma.collectionPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionPageFindUniqueArgs>(args: SelectSubset<T, CollectionPageFindUniqueArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionPageFindUniqueOrThrowArgs} args - Arguments to find a CollectionPage
     * @example
     * // Get one CollectionPage
     * const collectionPage = await prisma.collectionPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionPageFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPageFindFirstArgs} args - Arguments to find a CollectionPage
     * @example
     * // Get one CollectionPage
     * const collectionPage = await prisma.collectionPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionPageFindFirstArgs>(args?: SelectSubset<T, CollectionPageFindFirstArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPageFindFirstOrThrowArgs} args - Arguments to find a CollectionPage
     * @example
     * // Get one CollectionPage
     * const collectionPage = await prisma.collectionPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionPageFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionPages
     * const collectionPages = await prisma.collectionPage.findMany()
     * 
     * // Get first 10 CollectionPages
     * const collectionPages = await prisma.collectionPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionPageWithIdOnly = await prisma.collectionPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionPageFindManyArgs>(args?: SelectSubset<T, CollectionPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionPage.
     * @param {CollectionPageCreateArgs} args - Arguments to create a CollectionPage.
     * @example
     * // Create one CollectionPage
     * const CollectionPage = await prisma.collectionPage.create({
     *   data: {
     *     // ... data to create a CollectionPage
     *   }
     * })
     * 
     */
    create<T extends CollectionPageCreateArgs>(args: SelectSubset<T, CollectionPageCreateArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionPages.
     * @param {CollectionPageCreateManyArgs} args - Arguments to create many CollectionPages.
     * @example
     * // Create many CollectionPages
     * const collectionPage = await prisma.collectionPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionPageCreateManyArgs>(args?: SelectSubset<T, CollectionPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollectionPages and returns the data saved in the database.
     * @param {CollectionPageCreateManyAndReturnArgs} args - Arguments to create many CollectionPages.
     * @example
     * // Create many CollectionPages
     * const collectionPage = await prisma.collectionPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollectionPages and only return the `id`
     * const collectionPageWithIdOnly = await prisma.collectionPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionPageCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollectionPage.
     * @param {CollectionPageDeleteArgs} args - Arguments to delete one CollectionPage.
     * @example
     * // Delete one CollectionPage
     * const CollectionPage = await prisma.collectionPage.delete({
     *   where: {
     *     // ... filter to delete one CollectionPage
     *   }
     * })
     * 
     */
    delete<T extends CollectionPageDeleteArgs>(args: SelectSubset<T, CollectionPageDeleteArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionPage.
     * @param {CollectionPageUpdateArgs} args - Arguments to update one CollectionPage.
     * @example
     * // Update one CollectionPage
     * const collectionPage = await prisma.collectionPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionPageUpdateArgs>(args: SelectSubset<T, CollectionPageUpdateArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionPages.
     * @param {CollectionPageDeleteManyArgs} args - Arguments to filter CollectionPages to delete.
     * @example
     * // Delete a few CollectionPages
     * const { count } = await prisma.collectionPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionPageDeleteManyArgs>(args?: SelectSubset<T, CollectionPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionPages
     * const collectionPage = await prisma.collectionPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionPageUpdateManyArgs>(args: SelectSubset<T, CollectionPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionPages and returns the data updated in the database.
     * @param {CollectionPageUpdateManyAndReturnArgs} args - Arguments to update many CollectionPages.
     * @example
     * // Update many CollectionPages
     * const collectionPage = await prisma.collectionPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollectionPages and only return the `id`
     * const collectionPageWithIdOnly = await prisma.collectionPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollectionPageUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollectionPage.
     * @param {CollectionPageUpsertArgs} args - Arguments to update or create a CollectionPage.
     * @example
     * // Update or create a CollectionPage
     * const collectionPage = await prisma.collectionPage.upsert({
     *   create: {
     *     // ... data to create a CollectionPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionPage we want to update
     *   }
     * })
     */
    upsert<T extends CollectionPageUpsertArgs>(args: SelectSubset<T, CollectionPageUpsertArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollectionPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPageCountArgs} args - Arguments to filter CollectionPages to count.
     * @example
     * // Count the number of CollectionPages
     * const count = await prisma.collectionPage.count({
     *   where: {
     *     // ... the filter for the CollectionPages we want to count
     *   }
     * })
    **/
    count<T extends CollectionPageCountArgs>(
      args?: Subset<T, CollectionPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionPageAggregateArgs>(args: Subset<T, CollectionPageAggregateArgs>): Prisma.PrismaPromise<GetCollectionPageAggregateType<T>>

    /**
     * Group by CollectionPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionPageGroupByArgs['orderBy'] }
        : { orderBy?: CollectionPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionPage model
   */
  readonly fields: CollectionPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generation<T extends CollectionPage$generationArgs<ExtArgs> = {}>(args?: Subset<T, CollectionPage$generationArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollectionPage model
   */
  interface CollectionPageFieldRefs {
    readonly id: FieldRef<"CollectionPage", 'String'>
    readonly label: FieldRef<"CollectionPage", 'String'>
    readonly originalDescription: FieldRef<"CollectionPage", 'String'>
    readonly createdAt: FieldRef<"CollectionPage", 'DateTime'>
    readonly projectId: FieldRef<"CollectionPage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CollectionPage findUnique
   */
  export type CollectionPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPage to fetch.
     */
    where: CollectionPageWhereUniqueInput
  }

  /**
   * CollectionPage findUniqueOrThrow
   */
  export type CollectionPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPage to fetch.
     */
    where: CollectionPageWhereUniqueInput
  }

  /**
   * CollectionPage findFirst
   */
  export type CollectionPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPage to fetch.
     */
    where?: CollectionPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPages to fetch.
     */
    orderBy?: CollectionPageOrderByWithRelationInput | CollectionPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionPages.
     */
    cursor?: CollectionPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionPages.
     */
    distinct?: CollectionPageScalarFieldEnum | CollectionPageScalarFieldEnum[]
  }

  /**
   * CollectionPage findFirstOrThrow
   */
  export type CollectionPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPage to fetch.
     */
    where?: CollectionPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPages to fetch.
     */
    orderBy?: CollectionPageOrderByWithRelationInput | CollectionPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionPages.
     */
    cursor?: CollectionPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionPages.
     */
    distinct?: CollectionPageScalarFieldEnum | CollectionPageScalarFieldEnum[]
  }

  /**
   * CollectionPage findMany
   */
  export type CollectionPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPages to fetch.
     */
    where?: CollectionPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPages to fetch.
     */
    orderBy?: CollectionPageOrderByWithRelationInput | CollectionPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionPages.
     */
    cursor?: CollectionPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionPages.
     */
    distinct?: CollectionPageScalarFieldEnum | CollectionPageScalarFieldEnum[]
  }

  /**
   * CollectionPage create
   */
  export type CollectionPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionPage.
     */
    data: XOR<CollectionPageCreateInput, CollectionPageUncheckedCreateInput>
  }

  /**
   * CollectionPage createMany
   */
  export type CollectionPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionPages.
     */
    data: CollectionPageCreateManyInput | CollectionPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollectionPage createManyAndReturn
   */
  export type CollectionPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * The data used to create many CollectionPages.
     */
    data: CollectionPageCreateManyInput | CollectionPageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionPage update
   */
  export type CollectionPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionPage.
     */
    data: XOR<CollectionPageUpdateInput, CollectionPageUncheckedUpdateInput>
    /**
     * Choose, which CollectionPage to update.
     */
    where: CollectionPageWhereUniqueInput
  }

  /**
   * CollectionPage updateMany
   */
  export type CollectionPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionPages.
     */
    data: XOR<CollectionPageUpdateManyMutationInput, CollectionPageUncheckedUpdateManyInput>
    /**
     * Filter which CollectionPages to update
     */
    where?: CollectionPageWhereInput
    /**
     * Limit how many CollectionPages to update.
     */
    limit?: number
  }

  /**
   * CollectionPage updateManyAndReturn
   */
  export type CollectionPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * The data used to update CollectionPages.
     */
    data: XOR<CollectionPageUpdateManyMutationInput, CollectionPageUncheckedUpdateManyInput>
    /**
     * Filter which CollectionPages to update
     */
    where?: CollectionPageWhereInput
    /**
     * Limit how many CollectionPages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionPage upsert
   */
  export type CollectionPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionPage to update in case it exists.
     */
    where: CollectionPageWhereUniqueInput
    /**
     * In case the CollectionPage found by the `where` argument doesn't exist, create a new CollectionPage with this data.
     */
    create: XOR<CollectionPageCreateInput, CollectionPageUncheckedCreateInput>
    /**
     * In case the CollectionPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionPageUpdateInput, CollectionPageUncheckedUpdateInput>
  }

  /**
   * CollectionPage delete
   */
  export type CollectionPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
    /**
     * Filter which CollectionPage to delete.
     */
    where: CollectionPageWhereUniqueInput
  }

  /**
   * CollectionPage deleteMany
   */
  export type CollectionPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionPages to delete
     */
    where?: CollectionPageWhereInput
    /**
     * Limit how many CollectionPages to delete.
     */
    limit?: number
  }

  /**
   * CollectionPage.generation
   */
  export type CollectionPage$generationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    where?: CollectionGenerationWhereInput
  }

  /**
   * CollectionPage without action
   */
  export type CollectionPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPage
     */
    select?: CollectionPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPage
     */
    omit?: CollectionPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPageInclude<ExtArgs> | null
  }


  /**
   * Model CollectionGeneration
   */

  export type AggregateCollectionGeneration = {
    _count: CollectionGenerationCountAggregateOutputType | null
    _avg: CollectionGenerationAvgAggregateOutputType | null
    _sum: CollectionGenerationSumAggregateOutputType | null
    _min: CollectionGenerationMinAggregateOutputType | null
    _max: CollectionGenerationMaxAggregateOutputType | null
  }

  export type CollectionGenerationAvgAggregateOutputType = {
    seoScore: number | null
  }

  export type CollectionGenerationSumAggregateOutputType = {
    seoScore: number | null
  }

  export type CollectionGenerationMinAggregateOutputType = {
    id: string | null
    optimizedTitle: string | null
    optimizedDescription: string | null
    seoKeywords: string | null
    seoScore: number | null
    createdAt: Date | null
    collectionPageId: string | null
  }

  export type CollectionGenerationMaxAggregateOutputType = {
    id: string | null
    optimizedTitle: string | null
    optimizedDescription: string | null
    seoKeywords: string | null
    seoScore: number | null
    createdAt: Date | null
    collectionPageId: string | null
  }

  export type CollectionGenerationCountAggregateOutputType = {
    id: number
    optimizedTitle: number
    optimizedDescription: number
    seoKeywords: number
    seoScore: number
    createdAt: number
    collectionPageId: number
    _all: number
  }


  export type CollectionGenerationAvgAggregateInputType = {
    seoScore?: true
  }

  export type CollectionGenerationSumAggregateInputType = {
    seoScore?: true
  }

  export type CollectionGenerationMinAggregateInputType = {
    id?: true
    optimizedTitle?: true
    optimizedDescription?: true
    seoKeywords?: true
    seoScore?: true
    createdAt?: true
    collectionPageId?: true
  }

  export type CollectionGenerationMaxAggregateInputType = {
    id?: true
    optimizedTitle?: true
    optimizedDescription?: true
    seoKeywords?: true
    seoScore?: true
    createdAt?: true
    collectionPageId?: true
  }

  export type CollectionGenerationCountAggregateInputType = {
    id?: true
    optimizedTitle?: true
    optimizedDescription?: true
    seoKeywords?: true
    seoScore?: true
    createdAt?: true
    collectionPageId?: true
    _all?: true
  }

  export type CollectionGenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionGeneration to aggregate.
     */
    where?: CollectionGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionGenerations to fetch.
     */
    orderBy?: CollectionGenerationOrderByWithRelationInput | CollectionGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionGenerations
    **/
    _count?: true | CollectionGenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionGenerationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionGenerationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionGenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionGenerationMaxAggregateInputType
  }

  export type GetCollectionGenerationAggregateType<T extends CollectionGenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionGeneration[P]>
      : GetScalarType<T[P], AggregateCollectionGeneration[P]>
  }




  export type CollectionGenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionGenerationWhereInput
    orderBy?: CollectionGenerationOrderByWithAggregationInput | CollectionGenerationOrderByWithAggregationInput[]
    by: CollectionGenerationScalarFieldEnum[] | CollectionGenerationScalarFieldEnum
    having?: CollectionGenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionGenerationCountAggregateInputType | true
    _avg?: CollectionGenerationAvgAggregateInputType
    _sum?: CollectionGenerationSumAggregateInputType
    _min?: CollectionGenerationMinAggregateInputType
    _max?: CollectionGenerationMaxAggregateInputType
  }

  export type CollectionGenerationGroupByOutputType = {
    id: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt: Date
    collectionPageId: string
    _count: CollectionGenerationCountAggregateOutputType | null
    _avg: CollectionGenerationAvgAggregateOutputType | null
    _sum: CollectionGenerationSumAggregateOutputType | null
    _min: CollectionGenerationMinAggregateOutputType | null
    _max: CollectionGenerationMaxAggregateOutputType | null
  }

  type GetCollectionGenerationGroupByPayload<T extends CollectionGenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGenerationGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGenerationGroupByOutputType[P]>
        }
      >
    >


  export type CollectionGenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optimizedTitle?: boolean
    optimizedDescription?: boolean
    seoKeywords?: boolean
    seoScore?: boolean
    createdAt?: boolean
    collectionPageId?: boolean
    collectionPage?: boolean | CollectionPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionGeneration"]>

  export type CollectionGenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optimizedTitle?: boolean
    optimizedDescription?: boolean
    seoKeywords?: boolean
    seoScore?: boolean
    createdAt?: boolean
    collectionPageId?: boolean
    collectionPage?: boolean | CollectionPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionGeneration"]>

  export type CollectionGenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optimizedTitle?: boolean
    optimizedDescription?: boolean
    seoKeywords?: boolean
    seoScore?: boolean
    createdAt?: boolean
    collectionPageId?: boolean
    collectionPage?: boolean | CollectionPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionGeneration"]>

  export type CollectionGenerationSelectScalar = {
    id?: boolean
    optimizedTitle?: boolean
    optimizedDescription?: boolean
    seoKeywords?: boolean
    seoScore?: boolean
    createdAt?: boolean
    collectionPageId?: boolean
  }

  export type CollectionGenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "optimizedTitle" | "optimizedDescription" | "seoKeywords" | "seoScore" | "createdAt" | "collectionPageId", ExtArgs["result"]["collectionGeneration"]>
  export type CollectionGenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPage?: boolean | CollectionPageDefaultArgs<ExtArgs>
  }
  export type CollectionGenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPage?: boolean | CollectionPageDefaultArgs<ExtArgs>
  }
  export type CollectionGenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collectionPage?: boolean | CollectionPageDefaultArgs<ExtArgs>
  }

  export type $CollectionGenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionGeneration"
    objects: {
      collectionPage: Prisma.$CollectionPagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      optimizedTitle: string
      optimizedDescription: string
      seoKeywords: string
      seoScore: number
      createdAt: Date
      collectionPageId: string
    }, ExtArgs["result"]["collectionGeneration"]>
    composites: {}
  }

  type CollectionGenerationGetPayload<S extends boolean | null | undefined | CollectionGenerationDefaultArgs> = $Result.GetResult<Prisma.$CollectionGenerationPayload, S>

  type CollectionGenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionGenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionGenerationCountAggregateInputType | true
    }

  export interface CollectionGenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionGeneration'], meta: { name: 'CollectionGeneration' } }
    /**
     * Find zero or one CollectionGeneration that matches the filter.
     * @param {CollectionGenerationFindUniqueArgs} args - Arguments to find a CollectionGeneration
     * @example
     * // Get one CollectionGeneration
     * const collectionGeneration = await prisma.collectionGeneration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionGenerationFindUniqueArgs>(args: SelectSubset<T, CollectionGenerationFindUniqueArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionGeneration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionGenerationFindUniqueOrThrowArgs} args - Arguments to find a CollectionGeneration
     * @example
     * // Get one CollectionGeneration
     * const collectionGeneration = await prisma.collectionGeneration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionGenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionGenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionGeneration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGenerationFindFirstArgs} args - Arguments to find a CollectionGeneration
     * @example
     * // Get one CollectionGeneration
     * const collectionGeneration = await prisma.collectionGeneration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionGenerationFindFirstArgs>(args?: SelectSubset<T, CollectionGenerationFindFirstArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionGeneration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGenerationFindFirstOrThrowArgs} args - Arguments to find a CollectionGeneration
     * @example
     * // Get one CollectionGeneration
     * const collectionGeneration = await prisma.collectionGeneration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionGenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionGenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionGenerations
     * const collectionGenerations = await prisma.collectionGeneration.findMany()
     * 
     * // Get first 10 CollectionGenerations
     * const collectionGenerations = await prisma.collectionGeneration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionGenerationWithIdOnly = await prisma.collectionGeneration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionGenerationFindManyArgs>(args?: SelectSubset<T, CollectionGenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionGeneration.
     * @param {CollectionGenerationCreateArgs} args - Arguments to create a CollectionGeneration.
     * @example
     * // Create one CollectionGeneration
     * const CollectionGeneration = await prisma.collectionGeneration.create({
     *   data: {
     *     // ... data to create a CollectionGeneration
     *   }
     * })
     * 
     */
    create<T extends CollectionGenerationCreateArgs>(args: SelectSubset<T, CollectionGenerationCreateArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionGenerations.
     * @param {CollectionGenerationCreateManyArgs} args - Arguments to create many CollectionGenerations.
     * @example
     * // Create many CollectionGenerations
     * const collectionGeneration = await prisma.collectionGeneration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionGenerationCreateManyArgs>(args?: SelectSubset<T, CollectionGenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollectionGenerations and returns the data saved in the database.
     * @param {CollectionGenerationCreateManyAndReturnArgs} args - Arguments to create many CollectionGenerations.
     * @example
     * // Create many CollectionGenerations
     * const collectionGeneration = await prisma.collectionGeneration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollectionGenerations and only return the `id`
     * const collectionGenerationWithIdOnly = await prisma.collectionGeneration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionGenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionGenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollectionGeneration.
     * @param {CollectionGenerationDeleteArgs} args - Arguments to delete one CollectionGeneration.
     * @example
     * // Delete one CollectionGeneration
     * const CollectionGeneration = await prisma.collectionGeneration.delete({
     *   where: {
     *     // ... filter to delete one CollectionGeneration
     *   }
     * })
     * 
     */
    delete<T extends CollectionGenerationDeleteArgs>(args: SelectSubset<T, CollectionGenerationDeleteArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionGeneration.
     * @param {CollectionGenerationUpdateArgs} args - Arguments to update one CollectionGeneration.
     * @example
     * // Update one CollectionGeneration
     * const collectionGeneration = await prisma.collectionGeneration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionGenerationUpdateArgs>(args: SelectSubset<T, CollectionGenerationUpdateArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionGenerations.
     * @param {CollectionGenerationDeleteManyArgs} args - Arguments to filter CollectionGenerations to delete.
     * @example
     * // Delete a few CollectionGenerations
     * const { count } = await prisma.collectionGeneration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionGenerationDeleteManyArgs>(args?: SelectSubset<T, CollectionGenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionGenerations
     * const collectionGeneration = await prisma.collectionGeneration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionGenerationUpdateManyArgs>(args: SelectSubset<T, CollectionGenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionGenerations and returns the data updated in the database.
     * @param {CollectionGenerationUpdateManyAndReturnArgs} args - Arguments to update many CollectionGenerations.
     * @example
     * // Update many CollectionGenerations
     * const collectionGeneration = await prisma.collectionGeneration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollectionGenerations and only return the `id`
     * const collectionGenerationWithIdOnly = await prisma.collectionGeneration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollectionGenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionGenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollectionGeneration.
     * @param {CollectionGenerationUpsertArgs} args - Arguments to update or create a CollectionGeneration.
     * @example
     * // Update or create a CollectionGeneration
     * const collectionGeneration = await prisma.collectionGeneration.upsert({
     *   create: {
     *     // ... data to create a CollectionGeneration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionGeneration we want to update
     *   }
     * })
     */
    upsert<T extends CollectionGenerationUpsertArgs>(args: SelectSubset<T, CollectionGenerationUpsertArgs<ExtArgs>>): Prisma__CollectionGenerationClient<$Result.GetResult<Prisma.$CollectionGenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollectionGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGenerationCountArgs} args - Arguments to filter CollectionGenerations to count.
     * @example
     * // Count the number of CollectionGenerations
     * const count = await prisma.collectionGeneration.count({
     *   where: {
     *     // ... the filter for the CollectionGenerations we want to count
     *   }
     * })
    **/
    count<T extends CollectionGenerationCountArgs>(
      args?: Subset<T, CollectionGenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionGenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionGenerationAggregateArgs>(args: Subset<T, CollectionGenerationAggregateArgs>): Prisma.PrismaPromise<GetCollectionGenerationAggregateType<T>>

    /**
     * Group by CollectionGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGenerationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGenerationGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGenerationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionGeneration model
   */
  readonly fields: CollectionGenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionGeneration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionGenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collectionPage<T extends CollectionPageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionPageDefaultArgs<ExtArgs>>): Prisma__CollectionPageClient<$Result.GetResult<Prisma.$CollectionPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollectionGeneration model
   */
  interface CollectionGenerationFieldRefs {
    readonly id: FieldRef<"CollectionGeneration", 'String'>
    readonly optimizedTitle: FieldRef<"CollectionGeneration", 'String'>
    readonly optimizedDescription: FieldRef<"CollectionGeneration", 'String'>
    readonly seoKeywords: FieldRef<"CollectionGeneration", 'String'>
    readonly seoScore: FieldRef<"CollectionGeneration", 'Int'>
    readonly createdAt: FieldRef<"CollectionGeneration", 'DateTime'>
    readonly collectionPageId: FieldRef<"CollectionGeneration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CollectionGeneration findUnique
   */
  export type CollectionGenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * Filter, which CollectionGeneration to fetch.
     */
    where: CollectionGenerationWhereUniqueInput
  }

  /**
   * CollectionGeneration findUniqueOrThrow
   */
  export type CollectionGenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * Filter, which CollectionGeneration to fetch.
     */
    where: CollectionGenerationWhereUniqueInput
  }

  /**
   * CollectionGeneration findFirst
   */
  export type CollectionGenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * Filter, which CollectionGeneration to fetch.
     */
    where?: CollectionGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionGenerations to fetch.
     */
    orderBy?: CollectionGenerationOrderByWithRelationInput | CollectionGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionGenerations.
     */
    cursor?: CollectionGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionGenerations.
     */
    distinct?: CollectionGenerationScalarFieldEnum | CollectionGenerationScalarFieldEnum[]
  }

  /**
   * CollectionGeneration findFirstOrThrow
   */
  export type CollectionGenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * Filter, which CollectionGeneration to fetch.
     */
    where?: CollectionGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionGenerations to fetch.
     */
    orderBy?: CollectionGenerationOrderByWithRelationInput | CollectionGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionGenerations.
     */
    cursor?: CollectionGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionGenerations.
     */
    distinct?: CollectionGenerationScalarFieldEnum | CollectionGenerationScalarFieldEnum[]
  }

  /**
   * CollectionGeneration findMany
   */
  export type CollectionGenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * Filter, which CollectionGenerations to fetch.
     */
    where?: CollectionGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionGenerations to fetch.
     */
    orderBy?: CollectionGenerationOrderByWithRelationInput | CollectionGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionGenerations.
     */
    cursor?: CollectionGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionGenerations.
     */
    distinct?: CollectionGenerationScalarFieldEnum | CollectionGenerationScalarFieldEnum[]
  }

  /**
   * CollectionGeneration create
   */
  export type CollectionGenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionGeneration.
     */
    data: XOR<CollectionGenerationCreateInput, CollectionGenerationUncheckedCreateInput>
  }

  /**
   * CollectionGeneration createMany
   */
  export type CollectionGenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionGenerations.
     */
    data: CollectionGenerationCreateManyInput | CollectionGenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollectionGeneration createManyAndReturn
   */
  export type CollectionGenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * The data used to create many CollectionGenerations.
     */
    data: CollectionGenerationCreateManyInput | CollectionGenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionGeneration update
   */
  export type CollectionGenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionGeneration.
     */
    data: XOR<CollectionGenerationUpdateInput, CollectionGenerationUncheckedUpdateInput>
    /**
     * Choose, which CollectionGeneration to update.
     */
    where: CollectionGenerationWhereUniqueInput
  }

  /**
   * CollectionGeneration updateMany
   */
  export type CollectionGenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionGenerations.
     */
    data: XOR<CollectionGenerationUpdateManyMutationInput, CollectionGenerationUncheckedUpdateManyInput>
    /**
     * Filter which CollectionGenerations to update
     */
    where?: CollectionGenerationWhereInput
    /**
     * Limit how many CollectionGenerations to update.
     */
    limit?: number
  }

  /**
   * CollectionGeneration updateManyAndReturn
   */
  export type CollectionGenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * The data used to update CollectionGenerations.
     */
    data: XOR<CollectionGenerationUpdateManyMutationInput, CollectionGenerationUncheckedUpdateManyInput>
    /**
     * Filter which CollectionGenerations to update
     */
    where?: CollectionGenerationWhereInput
    /**
     * Limit how many CollectionGenerations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionGeneration upsert
   */
  export type CollectionGenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionGeneration to update in case it exists.
     */
    where: CollectionGenerationWhereUniqueInput
    /**
     * In case the CollectionGeneration found by the `where` argument doesn't exist, create a new CollectionGeneration with this data.
     */
    create: XOR<CollectionGenerationCreateInput, CollectionGenerationUncheckedCreateInput>
    /**
     * In case the CollectionGeneration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionGenerationUpdateInput, CollectionGenerationUncheckedUpdateInput>
  }

  /**
   * CollectionGeneration delete
   */
  export type CollectionGenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
    /**
     * Filter which CollectionGeneration to delete.
     */
    where: CollectionGenerationWhereUniqueInput
  }

  /**
   * CollectionGeneration deleteMany
   */
  export type CollectionGenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionGenerations to delete
     */
    where?: CollectionGenerationWhereInput
    /**
     * Limit how many CollectionGenerations to delete.
     */
    limit?: number
  }

  /**
   * CollectionGeneration without action
   */
  export type CollectionGenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionGeneration
     */
    select?: CollectionGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionGeneration
     */
    omit?: CollectionGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionGenerationInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    progress: number | null
  }

  export type JobSumAggregateOutputType = {
    progress: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    createdAt: Date | null
    errorMessage: string | null
    projectId: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    createdAt: Date | null
    errorMessage: string | null
    projectId: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    status: number
    progress: number
    createdAt: number
    errorMessage: number
    projectId: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    progress?: true
  }

  export type JobSumAggregateInputType = {
    progress?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    status?: true
    progress?: true
    createdAt?: true
    errorMessage?: true
    projectId?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    status?: true
    progress?: true
    createdAt?: true
    errorMessage?: true
    projectId?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    status?: true
    progress?: true
    createdAt?: true
    errorMessage?: true
    projectId?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    status: $Enums.JobStatus
    progress: number
    createdAt: Date
    errorMessage: string | null
    projectId: string
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    errorMessage?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    errorMessage?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    errorMessage?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    errorMessage?: boolean
    projectId?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "progress" | "createdAt" | "errorMessage" | "projectId", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.JobStatus
      progress: number
      createdAt: Date
      errorMessage: string | null
      projectId: string
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly progress: FieldRef<"Job", 'Int'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly errorMessage: FieldRef<"Job", 'String'>
    readonly projectId: FieldRef<"Job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model UsageMonthly
   */

  export type AggregateUsageMonthly = {
    _count: UsageMonthlyCountAggregateOutputType | null
    _avg: UsageMonthlyAvgAggregateOutputType | null
    _sum: UsageMonthlySumAggregateOutputType | null
    _min: UsageMonthlyMinAggregateOutputType | null
    _max: UsageMonthlyMaxAggregateOutputType | null
  }

  export type UsageMonthlyAvgAggregateOutputType = {
    optimizedProducts: number | null
    estimatedCostCents: number | null
  }

  export type UsageMonthlySumAggregateOutputType = {
    optimizedProducts: number | null
    estimatedCostCents: number | null
  }

  export type UsageMonthlyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    monthKey: string | null
    optimizedProducts: number | null
    estimatedCostCents: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageMonthlyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    monthKey: string | null
    optimizedProducts: number | null
    estimatedCostCents: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageMonthlyCountAggregateOutputType = {
    id: number
    userId: number
    monthKey: number
    optimizedProducts: number
    estimatedCostCents: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsageMonthlyAvgAggregateInputType = {
    optimizedProducts?: true
    estimatedCostCents?: true
  }

  export type UsageMonthlySumAggregateInputType = {
    optimizedProducts?: true
    estimatedCostCents?: true
  }

  export type UsageMonthlyMinAggregateInputType = {
    id?: true
    userId?: true
    monthKey?: true
    optimizedProducts?: true
    estimatedCostCents?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageMonthlyMaxAggregateInputType = {
    id?: true
    userId?: true
    monthKey?: true
    optimizedProducts?: true
    estimatedCostCents?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageMonthlyCountAggregateInputType = {
    id?: true
    userId?: true
    monthKey?: true
    optimizedProducts?: true
    estimatedCostCents?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsageMonthlyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageMonthly to aggregate.
     */
    where?: UsageMonthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMonthlies to fetch.
     */
    orderBy?: UsageMonthlyOrderByWithRelationInput | UsageMonthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageMonthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMonthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMonthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageMonthlies
    **/
    _count?: true | UsageMonthlyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageMonthlyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageMonthlySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageMonthlyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageMonthlyMaxAggregateInputType
  }

  export type GetUsageMonthlyAggregateType<T extends UsageMonthlyAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageMonthly]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageMonthly[P]>
      : GetScalarType<T[P], AggregateUsageMonthly[P]>
  }




  export type UsageMonthlyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageMonthlyWhereInput
    orderBy?: UsageMonthlyOrderByWithAggregationInput | UsageMonthlyOrderByWithAggregationInput[]
    by: UsageMonthlyScalarFieldEnum[] | UsageMonthlyScalarFieldEnum
    having?: UsageMonthlyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageMonthlyCountAggregateInputType | true
    _avg?: UsageMonthlyAvgAggregateInputType
    _sum?: UsageMonthlySumAggregateInputType
    _min?: UsageMonthlyMinAggregateInputType
    _max?: UsageMonthlyMaxAggregateInputType
  }

  export type UsageMonthlyGroupByOutputType = {
    id: string
    userId: string
    monthKey: string
    optimizedProducts: number
    estimatedCostCents: number
    createdAt: Date
    updatedAt: Date
    _count: UsageMonthlyCountAggregateOutputType | null
    _avg: UsageMonthlyAvgAggregateOutputType | null
    _sum: UsageMonthlySumAggregateOutputType | null
    _min: UsageMonthlyMinAggregateOutputType | null
    _max: UsageMonthlyMaxAggregateOutputType | null
  }

  type GetUsageMonthlyGroupByPayload<T extends UsageMonthlyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageMonthlyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageMonthlyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageMonthlyGroupByOutputType[P]>
            : GetScalarType<T[P], UsageMonthlyGroupByOutputType[P]>
        }
      >
    >


  export type UsageMonthlySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    monthKey?: boolean
    optimizedProducts?: boolean
    estimatedCostCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageMonthly"]>

  export type UsageMonthlySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    monthKey?: boolean
    optimizedProducts?: boolean
    estimatedCostCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageMonthly"]>

  export type UsageMonthlySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    monthKey?: boolean
    optimizedProducts?: boolean
    estimatedCostCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageMonthly"]>

  export type UsageMonthlySelectScalar = {
    id?: boolean
    userId?: boolean
    monthKey?: boolean
    optimizedProducts?: boolean
    estimatedCostCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsageMonthlyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "monthKey" | "optimizedProducts" | "estimatedCostCents" | "createdAt" | "updatedAt", ExtArgs["result"]["usageMonthly"]>
  export type UsageMonthlyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UsageMonthlyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UsageMonthlyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UsageMonthlyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageMonthly"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      monthKey: string
      optimizedProducts: number
      estimatedCostCents: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usageMonthly"]>
    composites: {}
  }

  type UsageMonthlyGetPayload<S extends boolean | null | undefined | UsageMonthlyDefaultArgs> = $Result.GetResult<Prisma.$UsageMonthlyPayload, S>

  type UsageMonthlyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageMonthlyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageMonthlyCountAggregateInputType | true
    }

  export interface UsageMonthlyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageMonthly'], meta: { name: 'UsageMonthly' } }
    /**
     * Find zero or one UsageMonthly that matches the filter.
     * @param {UsageMonthlyFindUniqueArgs} args - Arguments to find a UsageMonthly
     * @example
     * // Get one UsageMonthly
     * const usageMonthly = await prisma.usageMonthly.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageMonthlyFindUniqueArgs>(args: SelectSubset<T, UsageMonthlyFindUniqueArgs<ExtArgs>>): Prisma__UsageMonthlyClient<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageMonthly that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageMonthlyFindUniqueOrThrowArgs} args - Arguments to find a UsageMonthly
     * @example
     * // Get one UsageMonthly
     * const usageMonthly = await prisma.usageMonthly.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageMonthlyFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageMonthlyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageMonthlyClient<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageMonthly that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMonthlyFindFirstArgs} args - Arguments to find a UsageMonthly
     * @example
     * // Get one UsageMonthly
     * const usageMonthly = await prisma.usageMonthly.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageMonthlyFindFirstArgs>(args?: SelectSubset<T, UsageMonthlyFindFirstArgs<ExtArgs>>): Prisma__UsageMonthlyClient<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageMonthly that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMonthlyFindFirstOrThrowArgs} args - Arguments to find a UsageMonthly
     * @example
     * // Get one UsageMonthly
     * const usageMonthly = await prisma.usageMonthly.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageMonthlyFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageMonthlyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageMonthlyClient<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageMonthlies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMonthlyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageMonthlies
     * const usageMonthlies = await prisma.usageMonthly.findMany()
     * 
     * // Get first 10 UsageMonthlies
     * const usageMonthlies = await prisma.usageMonthly.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageMonthlyWithIdOnly = await prisma.usageMonthly.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageMonthlyFindManyArgs>(args?: SelectSubset<T, UsageMonthlyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageMonthly.
     * @param {UsageMonthlyCreateArgs} args - Arguments to create a UsageMonthly.
     * @example
     * // Create one UsageMonthly
     * const UsageMonthly = await prisma.usageMonthly.create({
     *   data: {
     *     // ... data to create a UsageMonthly
     *   }
     * })
     * 
     */
    create<T extends UsageMonthlyCreateArgs>(args: SelectSubset<T, UsageMonthlyCreateArgs<ExtArgs>>): Prisma__UsageMonthlyClient<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageMonthlies.
     * @param {UsageMonthlyCreateManyArgs} args - Arguments to create many UsageMonthlies.
     * @example
     * // Create many UsageMonthlies
     * const usageMonthly = await prisma.usageMonthly.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageMonthlyCreateManyArgs>(args?: SelectSubset<T, UsageMonthlyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageMonthlies and returns the data saved in the database.
     * @param {UsageMonthlyCreateManyAndReturnArgs} args - Arguments to create many UsageMonthlies.
     * @example
     * // Create many UsageMonthlies
     * const usageMonthly = await prisma.usageMonthly.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageMonthlies and only return the `id`
     * const usageMonthlyWithIdOnly = await prisma.usageMonthly.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageMonthlyCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageMonthlyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageMonthly.
     * @param {UsageMonthlyDeleteArgs} args - Arguments to delete one UsageMonthly.
     * @example
     * // Delete one UsageMonthly
     * const UsageMonthly = await prisma.usageMonthly.delete({
     *   where: {
     *     // ... filter to delete one UsageMonthly
     *   }
     * })
     * 
     */
    delete<T extends UsageMonthlyDeleteArgs>(args: SelectSubset<T, UsageMonthlyDeleteArgs<ExtArgs>>): Prisma__UsageMonthlyClient<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageMonthly.
     * @param {UsageMonthlyUpdateArgs} args - Arguments to update one UsageMonthly.
     * @example
     * // Update one UsageMonthly
     * const usageMonthly = await prisma.usageMonthly.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageMonthlyUpdateArgs>(args: SelectSubset<T, UsageMonthlyUpdateArgs<ExtArgs>>): Prisma__UsageMonthlyClient<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageMonthlies.
     * @param {UsageMonthlyDeleteManyArgs} args - Arguments to filter UsageMonthlies to delete.
     * @example
     * // Delete a few UsageMonthlies
     * const { count } = await prisma.usageMonthly.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageMonthlyDeleteManyArgs>(args?: SelectSubset<T, UsageMonthlyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageMonthlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMonthlyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageMonthlies
     * const usageMonthly = await prisma.usageMonthly.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageMonthlyUpdateManyArgs>(args: SelectSubset<T, UsageMonthlyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageMonthlies and returns the data updated in the database.
     * @param {UsageMonthlyUpdateManyAndReturnArgs} args - Arguments to update many UsageMonthlies.
     * @example
     * // Update many UsageMonthlies
     * const usageMonthly = await prisma.usageMonthly.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageMonthlies and only return the `id`
     * const usageMonthlyWithIdOnly = await prisma.usageMonthly.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageMonthlyUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageMonthlyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageMonthly.
     * @param {UsageMonthlyUpsertArgs} args - Arguments to update or create a UsageMonthly.
     * @example
     * // Update or create a UsageMonthly
     * const usageMonthly = await prisma.usageMonthly.upsert({
     *   create: {
     *     // ... data to create a UsageMonthly
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageMonthly we want to update
     *   }
     * })
     */
    upsert<T extends UsageMonthlyUpsertArgs>(args: SelectSubset<T, UsageMonthlyUpsertArgs<ExtArgs>>): Prisma__UsageMonthlyClient<$Result.GetResult<Prisma.$UsageMonthlyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageMonthlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMonthlyCountArgs} args - Arguments to filter UsageMonthlies to count.
     * @example
     * // Count the number of UsageMonthlies
     * const count = await prisma.usageMonthly.count({
     *   where: {
     *     // ... the filter for the UsageMonthlies we want to count
     *   }
     * })
    **/
    count<T extends UsageMonthlyCountArgs>(
      args?: Subset<T, UsageMonthlyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageMonthlyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageMonthly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMonthlyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageMonthlyAggregateArgs>(args: Subset<T, UsageMonthlyAggregateArgs>): Prisma.PrismaPromise<GetUsageMonthlyAggregateType<T>>

    /**
     * Group by UsageMonthly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMonthlyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageMonthlyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageMonthlyGroupByArgs['orderBy'] }
        : { orderBy?: UsageMonthlyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageMonthlyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageMonthlyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageMonthly model
   */
  readonly fields: UsageMonthlyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageMonthly.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageMonthlyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageMonthly model
   */
  interface UsageMonthlyFieldRefs {
    readonly id: FieldRef<"UsageMonthly", 'String'>
    readonly userId: FieldRef<"UsageMonthly", 'String'>
    readonly monthKey: FieldRef<"UsageMonthly", 'String'>
    readonly optimizedProducts: FieldRef<"UsageMonthly", 'Int'>
    readonly estimatedCostCents: FieldRef<"UsageMonthly", 'Int'>
    readonly createdAt: FieldRef<"UsageMonthly", 'DateTime'>
    readonly updatedAt: FieldRef<"UsageMonthly", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageMonthly findUnique
   */
  export type UsageMonthlyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * Filter, which UsageMonthly to fetch.
     */
    where: UsageMonthlyWhereUniqueInput
  }

  /**
   * UsageMonthly findUniqueOrThrow
   */
  export type UsageMonthlyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * Filter, which UsageMonthly to fetch.
     */
    where: UsageMonthlyWhereUniqueInput
  }

  /**
   * UsageMonthly findFirst
   */
  export type UsageMonthlyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * Filter, which UsageMonthly to fetch.
     */
    where?: UsageMonthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMonthlies to fetch.
     */
    orderBy?: UsageMonthlyOrderByWithRelationInput | UsageMonthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageMonthlies.
     */
    cursor?: UsageMonthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMonthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMonthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageMonthlies.
     */
    distinct?: UsageMonthlyScalarFieldEnum | UsageMonthlyScalarFieldEnum[]
  }

  /**
   * UsageMonthly findFirstOrThrow
   */
  export type UsageMonthlyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * Filter, which UsageMonthly to fetch.
     */
    where?: UsageMonthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMonthlies to fetch.
     */
    orderBy?: UsageMonthlyOrderByWithRelationInput | UsageMonthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageMonthlies.
     */
    cursor?: UsageMonthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMonthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMonthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageMonthlies.
     */
    distinct?: UsageMonthlyScalarFieldEnum | UsageMonthlyScalarFieldEnum[]
  }

  /**
   * UsageMonthly findMany
   */
  export type UsageMonthlyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * Filter, which UsageMonthlies to fetch.
     */
    where?: UsageMonthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMonthlies to fetch.
     */
    orderBy?: UsageMonthlyOrderByWithRelationInput | UsageMonthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageMonthlies.
     */
    cursor?: UsageMonthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMonthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMonthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageMonthlies.
     */
    distinct?: UsageMonthlyScalarFieldEnum | UsageMonthlyScalarFieldEnum[]
  }

  /**
   * UsageMonthly create
   */
  export type UsageMonthlyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageMonthly.
     */
    data: XOR<UsageMonthlyCreateInput, UsageMonthlyUncheckedCreateInput>
  }

  /**
   * UsageMonthly createMany
   */
  export type UsageMonthlyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageMonthlies.
     */
    data: UsageMonthlyCreateManyInput | UsageMonthlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageMonthly createManyAndReturn
   */
  export type UsageMonthlyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * The data used to create many UsageMonthlies.
     */
    data: UsageMonthlyCreateManyInput | UsageMonthlyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageMonthly update
   */
  export type UsageMonthlyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageMonthly.
     */
    data: XOR<UsageMonthlyUpdateInput, UsageMonthlyUncheckedUpdateInput>
    /**
     * Choose, which UsageMonthly to update.
     */
    where: UsageMonthlyWhereUniqueInput
  }

  /**
   * UsageMonthly updateMany
   */
  export type UsageMonthlyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageMonthlies.
     */
    data: XOR<UsageMonthlyUpdateManyMutationInput, UsageMonthlyUncheckedUpdateManyInput>
    /**
     * Filter which UsageMonthlies to update
     */
    where?: UsageMonthlyWhereInput
    /**
     * Limit how many UsageMonthlies to update.
     */
    limit?: number
  }

  /**
   * UsageMonthly updateManyAndReturn
   */
  export type UsageMonthlyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * The data used to update UsageMonthlies.
     */
    data: XOR<UsageMonthlyUpdateManyMutationInput, UsageMonthlyUncheckedUpdateManyInput>
    /**
     * Filter which UsageMonthlies to update
     */
    where?: UsageMonthlyWhereInput
    /**
     * Limit how many UsageMonthlies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageMonthly upsert
   */
  export type UsageMonthlyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageMonthly to update in case it exists.
     */
    where: UsageMonthlyWhereUniqueInput
    /**
     * In case the UsageMonthly found by the `where` argument doesn't exist, create a new UsageMonthly with this data.
     */
    create: XOR<UsageMonthlyCreateInput, UsageMonthlyUncheckedCreateInput>
    /**
     * In case the UsageMonthly was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageMonthlyUpdateInput, UsageMonthlyUncheckedUpdateInput>
  }

  /**
   * UsageMonthly delete
   */
  export type UsageMonthlyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
    /**
     * Filter which UsageMonthly to delete.
     */
    where: UsageMonthlyWhereUniqueInput
  }

  /**
   * UsageMonthly deleteMany
   */
  export type UsageMonthlyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageMonthlies to delete
     */
    where?: UsageMonthlyWhereInput
    /**
     * Limit how many UsageMonthlies to delete.
     */
    limit?: number
  }

  /**
   * UsageMonthly without action
   */
  export type UsageMonthlyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMonthly
     */
    select?: UsageMonthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageMonthly
     */
    omit?: UsageMonthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMonthlyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    plan: 'plan'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    originalTitle: 'originalTitle',
    originalDescription: 'originalDescription',
    price: 'price',
    attributes: 'attributes',
    imageUrl: 'imageUrl',
    imageAlt: 'imageAlt',
    createdAt: 'createdAt',
    projectId: 'projectId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const GenerationScalarFieldEnum: {
    id: 'id',
    optimizedTitle: 'optimizedTitle',
    optimizedDescription: 'optimizedDescription',
    seoKeywords: 'seoKeywords',
    seoScore: 'seoScore',
    createdAt: 'createdAt',
    productId: 'productId'
  };

  export type GenerationScalarFieldEnum = (typeof GenerationScalarFieldEnum)[keyof typeof GenerationScalarFieldEnum]


  export const CollectionPageScalarFieldEnum: {
    id: 'id',
    label: 'label',
    originalDescription: 'originalDescription',
    createdAt: 'createdAt',
    projectId: 'projectId'
  };

  export type CollectionPageScalarFieldEnum = (typeof CollectionPageScalarFieldEnum)[keyof typeof CollectionPageScalarFieldEnum]


  export const CollectionGenerationScalarFieldEnum: {
    id: 'id',
    optimizedTitle: 'optimizedTitle',
    optimizedDescription: 'optimizedDescription',
    seoKeywords: 'seoKeywords',
    seoScore: 'seoScore',
    createdAt: 'createdAt',
    collectionPageId: 'collectionPageId'
  };

  export type CollectionGenerationScalarFieldEnum = (typeof CollectionGenerationScalarFieldEnum)[keyof typeof CollectionGenerationScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    status: 'status',
    progress: 'progress',
    createdAt: 'createdAt',
    errorMessage: 'errorMessage',
    projectId: 'projectId'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const UsageMonthlyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    monthKey: 'monthKey',
    optimizedProducts: 'optimizedProducts',
    estimatedCostCents: 'estimatedCostCents',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsageMonthlyScalarFieldEnum = (typeof UsageMonthlyScalarFieldEnum)[keyof typeof UsageMonthlyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan'
   */
  export type EnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan[]'
   */
  export type ListEnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    plan?: EnumSubscriptionPlanFilter<"User"> | $Enums.SubscriptionPlan
    projects?: ProjectListRelationFilter
    usageMonthly?: UsageMonthlyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    usageMonthly?: UsageMonthlyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    plan?: EnumSubscriptionPlanFilter<"User"> | $Enums.SubscriptionPlan
    projects?: ProjectListRelationFilter
    usageMonthly?: UsageMonthlyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    plan?: EnumSubscriptionPlanWithAggregatesFilter<"User"> | $Enums.SubscriptionPlan
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    products?: ProductListRelationFilter
    collectionPages?: CollectionPageListRelationFilter
    jobs?: JobListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    collectionPages?: CollectionPageOrderByRelationAggregateInput
    jobs?: JobOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    products?: ProductListRelationFilter
    collectionPages?: CollectionPageListRelationFilter
    jobs?: JobListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    userId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    originalTitle?: StringFilter<"Product"> | string
    originalDescription?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    attributes?: JsonFilter<"Product">
    imageUrl?: StringNullableFilter<"Product"> | string | null
    imageAlt?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    projectId?: StringFilter<"Product"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    generation?: XOR<GenerationNullableScalarRelationFilter, GenerationWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    originalTitle?: SortOrder
    originalDescription?: SortOrder
    price?: SortOrder
    attributes?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    generation?: GenerationOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    originalTitle?: StringFilter<"Product"> | string
    originalDescription?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    attributes?: JsonFilter<"Product">
    imageUrl?: StringNullableFilter<"Product"> | string | null
    imageAlt?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    projectId?: StringFilter<"Product"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    generation?: XOR<GenerationNullableScalarRelationFilter, GenerationWhereInput> | null
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    originalTitle?: SortOrder
    originalDescription?: SortOrder
    price?: SortOrder
    attributes?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    originalTitle?: StringWithAggregatesFilter<"Product"> | string
    originalDescription?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    attributes?: JsonWithAggregatesFilter<"Product">
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    imageAlt?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    projectId?: StringWithAggregatesFilter<"Product"> | string
  }

  export type GenerationWhereInput = {
    AND?: GenerationWhereInput | GenerationWhereInput[]
    OR?: GenerationWhereInput[]
    NOT?: GenerationWhereInput | GenerationWhereInput[]
    id?: StringFilter<"Generation"> | string
    optimizedTitle?: StringFilter<"Generation"> | string
    optimizedDescription?: StringFilter<"Generation"> | string
    seoKeywords?: StringFilter<"Generation"> | string
    seoScore?: IntFilter<"Generation"> | number
    createdAt?: DateTimeFilter<"Generation"> | Date | string
    productId?: StringFilter<"Generation"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type GenerationOrderByWithRelationInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type GenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    AND?: GenerationWhereInput | GenerationWhereInput[]
    OR?: GenerationWhereInput[]
    NOT?: GenerationWhereInput | GenerationWhereInput[]
    optimizedTitle?: StringFilter<"Generation"> | string
    optimizedDescription?: StringFilter<"Generation"> | string
    seoKeywords?: StringFilter<"Generation"> | string
    seoScore?: IntFilter<"Generation"> | number
    createdAt?: DateTimeFilter<"Generation"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId">

  export type GenerationOrderByWithAggregationInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
    _count?: GenerationCountOrderByAggregateInput
    _avg?: GenerationAvgOrderByAggregateInput
    _max?: GenerationMaxOrderByAggregateInput
    _min?: GenerationMinOrderByAggregateInput
    _sum?: GenerationSumOrderByAggregateInput
  }

  export type GenerationScalarWhereWithAggregatesInput = {
    AND?: GenerationScalarWhereWithAggregatesInput | GenerationScalarWhereWithAggregatesInput[]
    OR?: GenerationScalarWhereWithAggregatesInput[]
    NOT?: GenerationScalarWhereWithAggregatesInput | GenerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Generation"> | string
    optimizedTitle?: StringWithAggregatesFilter<"Generation"> | string
    optimizedDescription?: StringWithAggregatesFilter<"Generation"> | string
    seoKeywords?: StringWithAggregatesFilter<"Generation"> | string
    seoScore?: IntWithAggregatesFilter<"Generation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Generation"> | Date | string
    productId?: StringWithAggregatesFilter<"Generation"> | string
  }

  export type CollectionPageWhereInput = {
    AND?: CollectionPageWhereInput | CollectionPageWhereInput[]
    OR?: CollectionPageWhereInput[]
    NOT?: CollectionPageWhereInput | CollectionPageWhereInput[]
    id?: StringFilter<"CollectionPage"> | string
    label?: StringFilter<"CollectionPage"> | string
    originalDescription?: StringFilter<"CollectionPage"> | string
    createdAt?: DateTimeFilter<"CollectionPage"> | Date | string
    projectId?: StringFilter<"CollectionPage"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    generation?: XOR<CollectionGenerationNullableScalarRelationFilter, CollectionGenerationWhereInput> | null
  }

  export type CollectionPageOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    originalDescription?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    generation?: CollectionGenerationOrderByWithRelationInput
  }

  export type CollectionPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionPageWhereInput | CollectionPageWhereInput[]
    OR?: CollectionPageWhereInput[]
    NOT?: CollectionPageWhereInput | CollectionPageWhereInput[]
    label?: StringFilter<"CollectionPage"> | string
    originalDescription?: StringFilter<"CollectionPage"> | string
    createdAt?: DateTimeFilter<"CollectionPage"> | Date | string
    projectId?: StringFilter<"CollectionPage"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    generation?: XOR<CollectionGenerationNullableScalarRelationFilter, CollectionGenerationWhereInput> | null
  }, "id">

  export type CollectionPageOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    originalDescription?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    _count?: CollectionPageCountOrderByAggregateInput
    _max?: CollectionPageMaxOrderByAggregateInput
    _min?: CollectionPageMinOrderByAggregateInput
  }

  export type CollectionPageScalarWhereWithAggregatesInput = {
    AND?: CollectionPageScalarWhereWithAggregatesInput | CollectionPageScalarWhereWithAggregatesInput[]
    OR?: CollectionPageScalarWhereWithAggregatesInput[]
    NOT?: CollectionPageScalarWhereWithAggregatesInput | CollectionPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollectionPage"> | string
    label?: StringWithAggregatesFilter<"CollectionPage"> | string
    originalDescription?: StringWithAggregatesFilter<"CollectionPage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CollectionPage"> | Date | string
    projectId?: StringWithAggregatesFilter<"CollectionPage"> | string
  }

  export type CollectionGenerationWhereInput = {
    AND?: CollectionGenerationWhereInput | CollectionGenerationWhereInput[]
    OR?: CollectionGenerationWhereInput[]
    NOT?: CollectionGenerationWhereInput | CollectionGenerationWhereInput[]
    id?: StringFilter<"CollectionGeneration"> | string
    optimizedTitle?: StringFilter<"CollectionGeneration"> | string
    optimizedDescription?: StringFilter<"CollectionGeneration"> | string
    seoKeywords?: StringFilter<"CollectionGeneration"> | string
    seoScore?: IntFilter<"CollectionGeneration"> | number
    createdAt?: DateTimeFilter<"CollectionGeneration"> | Date | string
    collectionPageId?: StringFilter<"CollectionGeneration"> | string
    collectionPage?: XOR<CollectionPageScalarRelationFilter, CollectionPageWhereInput>
  }

  export type CollectionGenerationOrderByWithRelationInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    collectionPageId?: SortOrder
    collectionPage?: CollectionPageOrderByWithRelationInput
  }

  export type CollectionGenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collectionPageId?: string
    AND?: CollectionGenerationWhereInput | CollectionGenerationWhereInput[]
    OR?: CollectionGenerationWhereInput[]
    NOT?: CollectionGenerationWhereInput | CollectionGenerationWhereInput[]
    optimizedTitle?: StringFilter<"CollectionGeneration"> | string
    optimizedDescription?: StringFilter<"CollectionGeneration"> | string
    seoKeywords?: StringFilter<"CollectionGeneration"> | string
    seoScore?: IntFilter<"CollectionGeneration"> | number
    createdAt?: DateTimeFilter<"CollectionGeneration"> | Date | string
    collectionPage?: XOR<CollectionPageScalarRelationFilter, CollectionPageWhereInput>
  }, "id" | "collectionPageId">

  export type CollectionGenerationOrderByWithAggregationInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    collectionPageId?: SortOrder
    _count?: CollectionGenerationCountOrderByAggregateInput
    _avg?: CollectionGenerationAvgOrderByAggregateInput
    _max?: CollectionGenerationMaxOrderByAggregateInput
    _min?: CollectionGenerationMinOrderByAggregateInput
    _sum?: CollectionGenerationSumOrderByAggregateInput
  }

  export type CollectionGenerationScalarWhereWithAggregatesInput = {
    AND?: CollectionGenerationScalarWhereWithAggregatesInput | CollectionGenerationScalarWhereWithAggregatesInput[]
    OR?: CollectionGenerationScalarWhereWithAggregatesInput[]
    NOT?: CollectionGenerationScalarWhereWithAggregatesInput | CollectionGenerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollectionGeneration"> | string
    optimizedTitle?: StringWithAggregatesFilter<"CollectionGeneration"> | string
    optimizedDescription?: StringWithAggregatesFilter<"CollectionGeneration"> | string
    seoKeywords?: StringWithAggregatesFilter<"CollectionGeneration"> | string
    seoScore?: IntWithAggregatesFilter<"CollectionGeneration"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CollectionGeneration"> | Date | string
    collectionPageId?: StringWithAggregatesFilter<"CollectionGeneration"> | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    progress?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    errorMessage?: StringNullableFilter<"Job"> | string | null
    projectId?: StringFilter<"Job"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    progress?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    errorMessage?: StringNullableFilter<"Job"> | string | null
    projectId?: StringFilter<"Job"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    projectId?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    progress?: IntWithAggregatesFilter<"Job"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    errorMessage?: StringNullableWithAggregatesFilter<"Job"> | string | null
    projectId?: StringWithAggregatesFilter<"Job"> | string
  }

  export type UsageMonthlyWhereInput = {
    AND?: UsageMonthlyWhereInput | UsageMonthlyWhereInput[]
    OR?: UsageMonthlyWhereInput[]
    NOT?: UsageMonthlyWhereInput | UsageMonthlyWhereInput[]
    id?: StringFilter<"UsageMonthly"> | string
    userId?: StringFilter<"UsageMonthly"> | string
    monthKey?: StringFilter<"UsageMonthly"> | string
    optimizedProducts?: IntFilter<"UsageMonthly"> | number
    estimatedCostCents?: IntFilter<"UsageMonthly"> | number
    createdAt?: DateTimeFilter<"UsageMonthly"> | Date | string
    updatedAt?: DateTimeFilter<"UsageMonthly"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UsageMonthlyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    monthKey?: SortOrder
    optimizedProducts?: SortOrder
    estimatedCostCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UsageMonthlyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_monthKey?: UsageMonthlyUserIdMonthKeyCompoundUniqueInput
    AND?: UsageMonthlyWhereInput | UsageMonthlyWhereInput[]
    OR?: UsageMonthlyWhereInput[]
    NOT?: UsageMonthlyWhereInput | UsageMonthlyWhereInput[]
    userId?: StringFilter<"UsageMonthly"> | string
    monthKey?: StringFilter<"UsageMonthly"> | string
    optimizedProducts?: IntFilter<"UsageMonthly"> | number
    estimatedCostCents?: IntFilter<"UsageMonthly"> | number
    createdAt?: DateTimeFilter<"UsageMonthly"> | Date | string
    updatedAt?: DateTimeFilter<"UsageMonthly"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_monthKey">

  export type UsageMonthlyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    monthKey?: SortOrder
    optimizedProducts?: SortOrder
    estimatedCostCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsageMonthlyCountOrderByAggregateInput
    _avg?: UsageMonthlyAvgOrderByAggregateInput
    _max?: UsageMonthlyMaxOrderByAggregateInput
    _min?: UsageMonthlyMinOrderByAggregateInput
    _sum?: UsageMonthlySumOrderByAggregateInput
  }

  export type UsageMonthlyScalarWhereWithAggregatesInput = {
    AND?: UsageMonthlyScalarWhereWithAggregatesInput | UsageMonthlyScalarWhereWithAggregatesInput[]
    OR?: UsageMonthlyScalarWhereWithAggregatesInput[]
    NOT?: UsageMonthlyScalarWhereWithAggregatesInput | UsageMonthlyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageMonthly"> | string
    userId?: StringWithAggregatesFilter<"UsageMonthly"> | string
    monthKey?: StringWithAggregatesFilter<"UsageMonthly"> | string
    optimizedProducts?: IntWithAggregatesFilter<"UsageMonthly"> | number
    estimatedCostCents?: IntWithAggregatesFilter<"UsageMonthly"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UsageMonthly"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsageMonthly"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    plan?: $Enums.SubscriptionPlan
    projects?: ProjectCreateNestedManyWithoutUserInput
    usageMonthly?: UsageMonthlyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    plan?: $Enums.SubscriptionPlan
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    usageMonthly?: UsageMonthlyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    projects?: ProjectUpdateManyWithoutUserNestedInput
    usageMonthly?: UsageMonthlyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    usageMonthly?: UsageMonthlyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    plan?: $Enums.SubscriptionPlan
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    products?: ProductCreateNestedManyWithoutProjectInput
    collectionPages?: CollectionPageCreateNestedManyWithoutProjectInput
    jobs?: JobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    userId: string
    products?: ProductUncheckedCreateNestedManyWithoutProjectInput
    collectionPages?: CollectionPageUncheckedCreateNestedManyWithoutProjectInput
    jobs?: JobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    products?: ProductUpdateManyWithoutProjectNestedInput
    collectionPages?: CollectionPageUpdateManyWithoutProjectNestedInput
    jobs?: JobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutProjectNestedInput
    collectionPages?: CollectionPageUncheckedUpdateManyWithoutProjectNestedInput
    jobs?: JobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    userId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    imageAlt?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProductsInput
    generation?: GenerationCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    imageAlt?: string | null
    createdAt?: Date | string
    projectId: string
    generation?: GenerationUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProductsNestedInput
    generation?: GenerationUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    generation?: GenerationUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    imageAlt?: string | null
    createdAt?: Date | string
    projectId: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type GenerationCreateInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutGenerationInput
  }

  export type GenerationUncheckedCreateInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
    productId: string
  }

  export type GenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutGenerationNestedInput
  }

  export type GenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type GenerationCreateManyInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
    productId: string
  }

  export type GenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionPageCreateInput = {
    id?: string
    label: string
    originalDescription?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutCollectionPagesInput
    generation?: CollectionGenerationCreateNestedOneWithoutCollectionPageInput
  }

  export type CollectionPageUncheckedCreateInput = {
    id?: string
    label: string
    originalDescription?: string
    createdAt?: Date | string
    projectId: string
    generation?: CollectionGenerationUncheckedCreateNestedOneWithoutCollectionPageInput
  }

  export type CollectionPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCollectionPagesNestedInput
    generation?: CollectionGenerationUpdateOneWithoutCollectionPageNestedInput
  }

  export type CollectionPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    generation?: CollectionGenerationUncheckedUpdateOneWithoutCollectionPageNestedInput
  }

  export type CollectionPageCreateManyInput = {
    id?: string
    label: string
    originalDescription?: string
    createdAt?: Date | string
    projectId: string
  }

  export type CollectionPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionGenerationCreateInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
    collectionPage: CollectionPageCreateNestedOneWithoutGenerationInput
  }

  export type CollectionGenerationUncheckedCreateInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
    collectionPageId: string
  }

  export type CollectionGenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPage?: CollectionPageUpdateOneRequiredWithoutGenerationNestedInput
  }

  export type CollectionGenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPageId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionGenerationCreateManyInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
    collectionPageId: string
  }

  export type CollectionGenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionGenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionPageId?: StringFieldUpdateOperationsInput | string
  }

  export type JobCreateInput = {
    id?: string
    status?: $Enums.JobStatus
    progress?: number
    createdAt?: Date | string
    errorMessage?: string | null
    project: ProjectCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    status?: $Enums.JobStatus
    progress?: number
    createdAt?: Date | string
    errorMessage?: string | null
    projectId: string
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type JobCreateManyInput = {
    id?: string
    status?: $Enums.JobStatus
    progress?: number
    createdAt?: Date | string
    errorMessage?: string | null
    projectId: string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type UsageMonthlyCreateInput = {
    id?: string
    monthKey: string
    optimizedProducts?: number
    estimatedCostCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUsageMonthlyInput
  }

  export type UsageMonthlyUncheckedCreateInput = {
    id?: string
    userId: string
    monthKey: string
    optimizedProducts?: number
    estimatedCostCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMonthlyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    optimizedProducts?: IntFieldUpdateOperationsInput | number
    estimatedCostCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUsageMonthlyNestedInput
  }

  export type UsageMonthlyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    optimizedProducts?: IntFieldUpdateOperationsInput | number
    estimatedCostCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMonthlyCreateManyInput = {
    id?: string
    userId: string
    monthKey: string
    optimizedProducts?: number
    estimatedCostCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMonthlyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    optimizedProducts?: IntFieldUpdateOperationsInput | number
    estimatedCostCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMonthlyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    optimizedProducts?: IntFieldUpdateOperationsInput | number
    estimatedCostCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type UsageMonthlyListRelationFilter = {
    every?: UsageMonthlyWhereInput
    some?: UsageMonthlyWhereInput
    none?: UsageMonthlyWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageMonthlyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CollectionPageListRelationFilter = {
    every?: CollectionPageWhereInput
    some?: CollectionPageWhereInput
    none?: CollectionPageWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type GenerationNullableScalarRelationFilter = {
    is?: GenerationWhereInput | null
    isNot?: GenerationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    originalTitle?: SortOrder
    originalDescription?: SortOrder
    price?: SortOrder
    attributes?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    originalTitle?: SortOrder
    originalDescription?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    originalTitle?: SortOrder
    originalDescription?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type GenerationCountOrderByAggregateInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type GenerationAvgOrderByAggregateInput = {
    seoScore?: SortOrder
  }

  export type GenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type GenerationMinOrderByAggregateInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type GenerationSumOrderByAggregateInput = {
    seoScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CollectionGenerationNullableScalarRelationFilter = {
    is?: CollectionGenerationWhereInput | null
    isNot?: CollectionGenerationWhereInput | null
  }

  export type CollectionPageCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    originalDescription?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type CollectionPageMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    originalDescription?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type CollectionPageMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    originalDescription?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type CollectionPageScalarRelationFilter = {
    is?: CollectionPageWhereInput
    isNot?: CollectionPageWhereInput
  }

  export type CollectionGenerationCountOrderByAggregateInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    collectionPageId?: SortOrder
  }

  export type CollectionGenerationAvgOrderByAggregateInput = {
    seoScore?: SortOrder
  }

  export type CollectionGenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    collectionPageId?: SortOrder
  }

  export type CollectionGenerationMinOrderByAggregateInput = {
    id?: SortOrder
    optimizedTitle?: SortOrder
    optimizedDescription?: SortOrder
    seoKeywords?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    collectionPageId?: SortOrder
  }

  export type CollectionGenerationSumOrderByAggregateInput = {
    seoScore?: SortOrder
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    errorMessage?: SortOrder
    projectId?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    errorMessage?: SortOrder
    projectId?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    errorMessage?: SortOrder
    projectId?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type UsageMonthlyUserIdMonthKeyCompoundUniqueInput = {
    userId: string
    monthKey: string
  }

  export type UsageMonthlyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthKey?: SortOrder
    optimizedProducts?: SortOrder
    estimatedCostCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageMonthlyAvgOrderByAggregateInput = {
    optimizedProducts?: SortOrder
    estimatedCostCents?: SortOrder
  }

  export type UsageMonthlyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthKey?: SortOrder
    optimizedProducts?: SortOrder
    estimatedCostCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageMonthlyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthKey?: SortOrder
    optimizedProducts?: SortOrder
    estimatedCostCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageMonthlySumOrderByAggregateInput = {
    optimizedProducts?: SortOrder
    estimatedCostCents?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UsageMonthlyCreateNestedManyWithoutUserInput = {
    create?: XOR<UsageMonthlyCreateWithoutUserInput, UsageMonthlyUncheckedCreateWithoutUserInput> | UsageMonthlyCreateWithoutUserInput[] | UsageMonthlyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageMonthlyCreateOrConnectWithoutUserInput | UsageMonthlyCreateOrConnectWithoutUserInput[]
    createMany?: UsageMonthlyCreateManyUserInputEnvelope
    connect?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UsageMonthlyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsageMonthlyCreateWithoutUserInput, UsageMonthlyUncheckedCreateWithoutUserInput> | UsageMonthlyCreateWithoutUserInput[] | UsageMonthlyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageMonthlyCreateOrConnectWithoutUserInput | UsageMonthlyCreateOrConnectWithoutUserInput[]
    createMany?: UsageMonthlyCreateManyUserInputEnvelope
    connect?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UsageMonthlyUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsageMonthlyCreateWithoutUserInput, UsageMonthlyUncheckedCreateWithoutUserInput> | UsageMonthlyCreateWithoutUserInput[] | UsageMonthlyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageMonthlyCreateOrConnectWithoutUserInput | UsageMonthlyCreateOrConnectWithoutUserInput[]
    upsert?: UsageMonthlyUpsertWithWhereUniqueWithoutUserInput | UsageMonthlyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsageMonthlyCreateManyUserInputEnvelope
    set?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
    disconnect?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
    delete?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
    connect?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
    update?: UsageMonthlyUpdateWithWhereUniqueWithoutUserInput | UsageMonthlyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsageMonthlyUpdateManyWithWhereWithoutUserInput | UsageMonthlyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsageMonthlyScalarWhereInput | UsageMonthlyScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UsageMonthlyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsageMonthlyCreateWithoutUserInput, UsageMonthlyUncheckedCreateWithoutUserInput> | UsageMonthlyCreateWithoutUserInput[] | UsageMonthlyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageMonthlyCreateOrConnectWithoutUserInput | UsageMonthlyCreateOrConnectWithoutUserInput[]
    upsert?: UsageMonthlyUpsertWithWhereUniqueWithoutUserInput | UsageMonthlyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsageMonthlyCreateManyUserInputEnvelope
    set?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
    disconnect?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
    delete?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
    connect?: UsageMonthlyWhereUniqueInput | UsageMonthlyWhereUniqueInput[]
    update?: UsageMonthlyUpdateWithWhereUniqueWithoutUserInput | UsageMonthlyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsageMonthlyUpdateManyWithWhereWithoutUserInput | UsageMonthlyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsageMonthlyScalarWhereInput | UsageMonthlyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput> | ProductCreateWithoutProjectInput[] | ProductUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProjectInput | ProductCreateOrConnectWithoutProjectInput[]
    createMany?: ProductCreateManyProjectInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CollectionPageCreateNestedManyWithoutProjectInput = {
    create?: XOR<CollectionPageCreateWithoutProjectInput, CollectionPageUncheckedCreateWithoutProjectInput> | CollectionPageCreateWithoutProjectInput[] | CollectionPageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollectionPageCreateOrConnectWithoutProjectInput | CollectionPageCreateOrConnectWithoutProjectInput[]
    createMany?: CollectionPageCreateManyProjectInputEnvelope
    connect?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutProjectInput = {
    create?: XOR<JobCreateWithoutProjectInput, JobUncheckedCreateWithoutProjectInput> | JobCreateWithoutProjectInput[] | JobUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JobCreateOrConnectWithoutProjectInput | JobCreateOrConnectWithoutProjectInput[]
    createMany?: JobCreateManyProjectInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput> | ProductCreateWithoutProjectInput[] | ProductUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProjectInput | ProductCreateOrConnectWithoutProjectInput[]
    createMany?: ProductCreateManyProjectInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CollectionPageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CollectionPageCreateWithoutProjectInput, CollectionPageUncheckedCreateWithoutProjectInput> | CollectionPageCreateWithoutProjectInput[] | CollectionPageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollectionPageCreateOrConnectWithoutProjectInput | CollectionPageCreateOrConnectWithoutProjectInput[]
    createMany?: CollectionPageCreateManyProjectInputEnvelope
    connect?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<JobCreateWithoutProjectInput, JobUncheckedCreateWithoutProjectInput> | JobCreateWithoutProjectInput[] | JobUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JobCreateOrConnectWithoutProjectInput | JobCreateOrConnectWithoutProjectInput[]
    createMany?: JobCreateManyProjectInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProductUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput> | ProductCreateWithoutProjectInput[] | ProductUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProjectInput | ProductCreateOrConnectWithoutProjectInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProjectInput | ProductUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProductCreateManyProjectInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProjectInput | ProductUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProjectInput | ProductUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CollectionPageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CollectionPageCreateWithoutProjectInput, CollectionPageUncheckedCreateWithoutProjectInput> | CollectionPageCreateWithoutProjectInput[] | CollectionPageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollectionPageCreateOrConnectWithoutProjectInput | CollectionPageCreateOrConnectWithoutProjectInput[]
    upsert?: CollectionPageUpsertWithWhereUniqueWithoutProjectInput | CollectionPageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CollectionPageCreateManyProjectInputEnvelope
    set?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
    disconnect?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
    delete?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
    connect?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
    update?: CollectionPageUpdateWithWhereUniqueWithoutProjectInput | CollectionPageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CollectionPageUpdateManyWithWhereWithoutProjectInput | CollectionPageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CollectionPageScalarWhereInput | CollectionPageScalarWhereInput[]
  }

  export type JobUpdateManyWithoutProjectNestedInput = {
    create?: XOR<JobCreateWithoutProjectInput, JobUncheckedCreateWithoutProjectInput> | JobCreateWithoutProjectInput[] | JobUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JobCreateOrConnectWithoutProjectInput | JobCreateOrConnectWithoutProjectInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutProjectInput | JobUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: JobCreateManyProjectInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutProjectInput | JobUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: JobUpdateManyWithWhereWithoutProjectInput | JobUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput> | ProductCreateWithoutProjectInput[] | ProductUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProjectInput | ProductCreateOrConnectWithoutProjectInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProjectInput | ProductUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProductCreateManyProjectInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProjectInput | ProductUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProjectInput | ProductUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CollectionPageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CollectionPageCreateWithoutProjectInput, CollectionPageUncheckedCreateWithoutProjectInput> | CollectionPageCreateWithoutProjectInput[] | CollectionPageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CollectionPageCreateOrConnectWithoutProjectInput | CollectionPageCreateOrConnectWithoutProjectInput[]
    upsert?: CollectionPageUpsertWithWhereUniqueWithoutProjectInput | CollectionPageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CollectionPageCreateManyProjectInputEnvelope
    set?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
    disconnect?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
    delete?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
    connect?: CollectionPageWhereUniqueInput | CollectionPageWhereUniqueInput[]
    update?: CollectionPageUpdateWithWhereUniqueWithoutProjectInput | CollectionPageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CollectionPageUpdateManyWithWhereWithoutProjectInput | CollectionPageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CollectionPageScalarWhereInput | CollectionPageScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<JobCreateWithoutProjectInput, JobUncheckedCreateWithoutProjectInput> | JobCreateWithoutProjectInput[] | JobUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JobCreateOrConnectWithoutProjectInput | JobCreateOrConnectWithoutProjectInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutProjectInput | JobUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: JobCreateManyProjectInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutProjectInput | JobUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: JobUpdateManyWithWhereWithoutProjectInput | JobUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProjectCreateWithoutProductsInput, ProjectUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProductsInput
    connect?: ProjectWhereUniqueInput
  }

  export type GenerationCreateNestedOneWithoutProductInput = {
    create?: XOR<GenerationCreateWithoutProductInput, GenerationUncheckedCreateWithoutProductInput>
    connectOrCreate?: GenerationCreateOrConnectWithoutProductInput
    connect?: GenerationWhereUniqueInput
  }

  export type GenerationUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<GenerationCreateWithoutProductInput, GenerationUncheckedCreateWithoutProductInput>
    connectOrCreate?: GenerationCreateOrConnectWithoutProductInput
    connect?: GenerationWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProjectCreateWithoutProductsInput, ProjectUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProductsInput
    upsert?: ProjectUpsertWithoutProductsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProductsInput, ProjectUpdateWithoutProductsInput>, ProjectUncheckedUpdateWithoutProductsInput>
  }

  export type GenerationUpdateOneWithoutProductNestedInput = {
    create?: XOR<GenerationCreateWithoutProductInput, GenerationUncheckedCreateWithoutProductInput>
    connectOrCreate?: GenerationCreateOrConnectWithoutProductInput
    upsert?: GenerationUpsertWithoutProductInput
    disconnect?: GenerationWhereInput | boolean
    delete?: GenerationWhereInput | boolean
    connect?: GenerationWhereUniqueInput
    update?: XOR<XOR<GenerationUpdateToOneWithWhereWithoutProductInput, GenerationUpdateWithoutProductInput>, GenerationUncheckedUpdateWithoutProductInput>
  }

  export type GenerationUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<GenerationCreateWithoutProductInput, GenerationUncheckedCreateWithoutProductInput>
    connectOrCreate?: GenerationCreateOrConnectWithoutProductInput
    upsert?: GenerationUpsertWithoutProductInput
    disconnect?: GenerationWhereInput | boolean
    delete?: GenerationWhereInput | boolean
    connect?: GenerationWhereUniqueInput
    update?: XOR<XOR<GenerationUpdateToOneWithWhereWithoutProductInput, GenerationUpdateWithoutProductInput>, GenerationUncheckedUpdateWithoutProductInput>
  }

  export type ProductCreateNestedOneWithoutGenerationInput = {
    create?: XOR<ProductCreateWithoutGenerationInput, ProductUncheckedCreateWithoutGenerationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutGenerationInput
    connect?: ProductWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutGenerationNestedInput = {
    create?: XOR<ProductCreateWithoutGenerationInput, ProductUncheckedCreateWithoutGenerationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutGenerationInput
    upsert?: ProductUpsertWithoutGenerationInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutGenerationInput, ProductUpdateWithoutGenerationInput>, ProductUncheckedUpdateWithoutGenerationInput>
  }

  export type ProjectCreateNestedOneWithoutCollectionPagesInput = {
    create?: XOR<ProjectCreateWithoutCollectionPagesInput, ProjectUncheckedCreateWithoutCollectionPagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollectionPagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type CollectionGenerationCreateNestedOneWithoutCollectionPageInput = {
    create?: XOR<CollectionGenerationCreateWithoutCollectionPageInput, CollectionGenerationUncheckedCreateWithoutCollectionPageInput>
    connectOrCreate?: CollectionGenerationCreateOrConnectWithoutCollectionPageInput
    connect?: CollectionGenerationWhereUniqueInput
  }

  export type CollectionGenerationUncheckedCreateNestedOneWithoutCollectionPageInput = {
    create?: XOR<CollectionGenerationCreateWithoutCollectionPageInput, CollectionGenerationUncheckedCreateWithoutCollectionPageInput>
    connectOrCreate?: CollectionGenerationCreateOrConnectWithoutCollectionPageInput
    connect?: CollectionGenerationWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutCollectionPagesNestedInput = {
    create?: XOR<ProjectCreateWithoutCollectionPagesInput, ProjectUncheckedCreateWithoutCollectionPagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCollectionPagesInput
    upsert?: ProjectUpsertWithoutCollectionPagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCollectionPagesInput, ProjectUpdateWithoutCollectionPagesInput>, ProjectUncheckedUpdateWithoutCollectionPagesInput>
  }

  export type CollectionGenerationUpdateOneWithoutCollectionPageNestedInput = {
    create?: XOR<CollectionGenerationCreateWithoutCollectionPageInput, CollectionGenerationUncheckedCreateWithoutCollectionPageInput>
    connectOrCreate?: CollectionGenerationCreateOrConnectWithoutCollectionPageInput
    upsert?: CollectionGenerationUpsertWithoutCollectionPageInput
    disconnect?: CollectionGenerationWhereInput | boolean
    delete?: CollectionGenerationWhereInput | boolean
    connect?: CollectionGenerationWhereUniqueInput
    update?: XOR<XOR<CollectionGenerationUpdateToOneWithWhereWithoutCollectionPageInput, CollectionGenerationUpdateWithoutCollectionPageInput>, CollectionGenerationUncheckedUpdateWithoutCollectionPageInput>
  }

  export type CollectionGenerationUncheckedUpdateOneWithoutCollectionPageNestedInput = {
    create?: XOR<CollectionGenerationCreateWithoutCollectionPageInput, CollectionGenerationUncheckedCreateWithoutCollectionPageInput>
    connectOrCreate?: CollectionGenerationCreateOrConnectWithoutCollectionPageInput
    upsert?: CollectionGenerationUpsertWithoutCollectionPageInput
    disconnect?: CollectionGenerationWhereInput | boolean
    delete?: CollectionGenerationWhereInput | boolean
    connect?: CollectionGenerationWhereUniqueInput
    update?: XOR<XOR<CollectionGenerationUpdateToOneWithWhereWithoutCollectionPageInput, CollectionGenerationUpdateWithoutCollectionPageInput>, CollectionGenerationUncheckedUpdateWithoutCollectionPageInput>
  }

  export type CollectionPageCreateNestedOneWithoutGenerationInput = {
    create?: XOR<CollectionPageCreateWithoutGenerationInput, CollectionPageUncheckedCreateWithoutGenerationInput>
    connectOrCreate?: CollectionPageCreateOrConnectWithoutGenerationInput
    connect?: CollectionPageWhereUniqueInput
  }

  export type CollectionPageUpdateOneRequiredWithoutGenerationNestedInput = {
    create?: XOR<CollectionPageCreateWithoutGenerationInput, CollectionPageUncheckedCreateWithoutGenerationInput>
    connectOrCreate?: CollectionPageCreateOrConnectWithoutGenerationInput
    upsert?: CollectionPageUpsertWithoutGenerationInput
    connect?: CollectionPageWhereUniqueInput
    update?: XOR<XOR<CollectionPageUpdateToOneWithWhereWithoutGenerationInput, CollectionPageUpdateWithoutGenerationInput>, CollectionPageUncheckedUpdateWithoutGenerationInput>
  }

  export type ProjectCreateNestedOneWithoutJobsInput = {
    create?: XOR<ProjectCreateWithoutJobsInput, ProjectUncheckedCreateWithoutJobsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutJobsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type ProjectUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<ProjectCreateWithoutJobsInput, ProjectUncheckedCreateWithoutJobsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutJobsInput
    upsert?: ProjectUpsertWithoutJobsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutJobsInput, ProjectUpdateWithoutJobsInput>, ProjectUncheckedUpdateWithoutJobsInput>
  }

  export type UserCreateNestedOneWithoutUsageMonthlyInput = {
    create?: XOR<UserCreateWithoutUsageMonthlyInput, UserUncheckedCreateWithoutUsageMonthlyInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageMonthlyInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUsageMonthlyNestedInput = {
    create?: XOR<UserCreateWithoutUsageMonthlyInput, UserUncheckedCreateWithoutUsageMonthlyInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageMonthlyInput
    upsert?: UserUpsertWithoutUsageMonthlyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsageMonthlyInput, UserUpdateWithoutUsageMonthlyInput>, UserUncheckedUpdateWithoutUsageMonthlyInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutProjectInput
    collectionPages?: CollectionPageCreateNestedManyWithoutProjectInput
    jobs?: JobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutProjectInput
    collectionPages?: CollectionPageUncheckedCreateNestedManyWithoutProjectInput
    jobs?: JobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsageMonthlyCreateWithoutUserInput = {
    id?: string
    monthKey: string
    optimizedProducts?: number
    estimatedCostCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMonthlyUncheckedCreateWithoutUserInput = {
    id?: string
    monthKey: string
    optimizedProducts?: number
    estimatedCostCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageMonthlyCreateOrConnectWithoutUserInput = {
    where: UsageMonthlyWhereUniqueInput
    create: XOR<UsageMonthlyCreateWithoutUserInput, UsageMonthlyUncheckedCreateWithoutUserInput>
  }

  export type UsageMonthlyCreateManyUserInputEnvelope = {
    data: UsageMonthlyCreateManyUserInput | UsageMonthlyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
  }

  export type UsageMonthlyUpsertWithWhereUniqueWithoutUserInput = {
    where: UsageMonthlyWhereUniqueInput
    update: XOR<UsageMonthlyUpdateWithoutUserInput, UsageMonthlyUncheckedUpdateWithoutUserInput>
    create: XOR<UsageMonthlyCreateWithoutUserInput, UsageMonthlyUncheckedCreateWithoutUserInput>
  }

  export type UsageMonthlyUpdateWithWhereUniqueWithoutUserInput = {
    where: UsageMonthlyWhereUniqueInput
    data: XOR<UsageMonthlyUpdateWithoutUserInput, UsageMonthlyUncheckedUpdateWithoutUserInput>
  }

  export type UsageMonthlyUpdateManyWithWhereWithoutUserInput = {
    where: UsageMonthlyScalarWhereInput
    data: XOR<UsageMonthlyUpdateManyMutationInput, UsageMonthlyUncheckedUpdateManyWithoutUserInput>
  }

  export type UsageMonthlyScalarWhereInput = {
    AND?: UsageMonthlyScalarWhereInput | UsageMonthlyScalarWhereInput[]
    OR?: UsageMonthlyScalarWhereInput[]
    NOT?: UsageMonthlyScalarWhereInput | UsageMonthlyScalarWhereInput[]
    id?: StringFilter<"UsageMonthly"> | string
    userId?: StringFilter<"UsageMonthly"> | string
    monthKey?: StringFilter<"UsageMonthly"> | string
    optimizedProducts?: IntFilter<"UsageMonthly"> | number
    estimatedCostCents?: IntFilter<"UsageMonthly"> | number
    createdAt?: DateTimeFilter<"UsageMonthly"> | Date | string
    updatedAt?: DateTimeFilter<"UsageMonthly"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    plan?: $Enums.SubscriptionPlan
    usageMonthly?: UsageMonthlyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    plan?: $Enums.SubscriptionPlan
    usageMonthly?: UsageMonthlyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProductCreateWithoutProjectInput = {
    id?: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    imageAlt?: string | null
    createdAt?: Date | string
    generation?: GenerationCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProjectInput = {
    id?: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    imageAlt?: string | null
    createdAt?: Date | string
    generation?: GenerationUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProjectInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput>
  }

  export type ProductCreateManyProjectInputEnvelope = {
    data: ProductCreateManyProjectInput | ProductCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CollectionPageCreateWithoutProjectInput = {
    id?: string
    label: string
    originalDescription?: string
    createdAt?: Date | string
    generation?: CollectionGenerationCreateNestedOneWithoutCollectionPageInput
  }

  export type CollectionPageUncheckedCreateWithoutProjectInput = {
    id?: string
    label: string
    originalDescription?: string
    createdAt?: Date | string
    generation?: CollectionGenerationUncheckedCreateNestedOneWithoutCollectionPageInput
  }

  export type CollectionPageCreateOrConnectWithoutProjectInput = {
    where: CollectionPageWhereUniqueInput
    create: XOR<CollectionPageCreateWithoutProjectInput, CollectionPageUncheckedCreateWithoutProjectInput>
  }

  export type CollectionPageCreateManyProjectInputEnvelope = {
    data: CollectionPageCreateManyProjectInput | CollectionPageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type JobCreateWithoutProjectInput = {
    id?: string
    status?: $Enums.JobStatus
    progress?: number
    createdAt?: Date | string
    errorMessage?: string | null
  }

  export type JobUncheckedCreateWithoutProjectInput = {
    id?: string
    status?: $Enums.JobStatus
    progress?: number
    createdAt?: Date | string
    errorMessage?: string | null
  }

  export type JobCreateOrConnectWithoutProjectInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutProjectInput, JobUncheckedCreateWithoutProjectInput>
  }

  export type JobCreateManyProjectInputEnvelope = {
    data: JobCreateManyProjectInput | JobCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    usageMonthly?: UsageMonthlyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    usageMonthly?: UsageMonthlyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProjectInput, ProductUncheckedUpdateWithoutProjectInput>
    create: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProjectInput, ProductUncheckedUpdateWithoutProjectInput>
  }

  export type ProductUpdateManyWithWhereWithoutProjectInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    originalTitle?: StringFilter<"Product"> | string
    originalDescription?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    attributes?: JsonFilter<"Product">
    imageUrl?: StringNullableFilter<"Product"> | string | null
    imageAlt?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    projectId?: StringFilter<"Product"> | string
  }

  export type CollectionPageUpsertWithWhereUniqueWithoutProjectInput = {
    where: CollectionPageWhereUniqueInput
    update: XOR<CollectionPageUpdateWithoutProjectInput, CollectionPageUncheckedUpdateWithoutProjectInput>
    create: XOR<CollectionPageCreateWithoutProjectInput, CollectionPageUncheckedCreateWithoutProjectInput>
  }

  export type CollectionPageUpdateWithWhereUniqueWithoutProjectInput = {
    where: CollectionPageWhereUniqueInput
    data: XOR<CollectionPageUpdateWithoutProjectInput, CollectionPageUncheckedUpdateWithoutProjectInput>
  }

  export type CollectionPageUpdateManyWithWhereWithoutProjectInput = {
    where: CollectionPageScalarWhereInput
    data: XOR<CollectionPageUpdateManyMutationInput, CollectionPageUncheckedUpdateManyWithoutProjectInput>
  }

  export type CollectionPageScalarWhereInput = {
    AND?: CollectionPageScalarWhereInput | CollectionPageScalarWhereInput[]
    OR?: CollectionPageScalarWhereInput[]
    NOT?: CollectionPageScalarWhereInput | CollectionPageScalarWhereInput[]
    id?: StringFilter<"CollectionPage"> | string
    label?: StringFilter<"CollectionPage"> | string
    originalDescription?: StringFilter<"CollectionPage"> | string
    createdAt?: DateTimeFilter<"CollectionPage"> | Date | string
    projectId?: StringFilter<"CollectionPage"> | string
  }

  export type JobUpsertWithWhereUniqueWithoutProjectInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutProjectInput, JobUncheckedUpdateWithoutProjectInput>
    create: XOR<JobCreateWithoutProjectInput, JobUncheckedCreateWithoutProjectInput>
  }

  export type JobUpdateWithWhereUniqueWithoutProjectInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutProjectInput, JobUncheckedUpdateWithoutProjectInput>
  }

  export type JobUpdateManyWithWhereWithoutProjectInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutProjectInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    progress?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    errorMessage?: StringNullableFilter<"Job"> | string | null
    projectId?: StringFilter<"Job"> | string
  }

  export type ProjectCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    collectionPages?: CollectionPageCreateNestedManyWithoutProjectInput
    jobs?: JobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    userId: string
    collectionPages?: CollectionPageUncheckedCreateNestedManyWithoutProjectInput
    jobs?: JobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProductsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProductsInput, ProjectUncheckedCreateWithoutProductsInput>
  }

  export type GenerationCreateWithoutProductInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
  }

  export type GenerationUncheckedCreateWithoutProductInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
  }

  export type GenerationCreateOrConnectWithoutProductInput = {
    where: GenerationWhereUniqueInput
    create: XOR<GenerationCreateWithoutProductInput, GenerationUncheckedCreateWithoutProductInput>
  }

  export type ProjectUpsertWithoutProductsInput = {
    update: XOR<ProjectUpdateWithoutProductsInput, ProjectUncheckedUpdateWithoutProductsInput>
    create: XOR<ProjectCreateWithoutProductsInput, ProjectUncheckedCreateWithoutProductsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProductsInput, ProjectUncheckedUpdateWithoutProductsInput>
  }

  export type ProjectUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    collectionPages?: CollectionPageUpdateManyWithoutProjectNestedInput
    jobs?: JobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionPages?: CollectionPageUncheckedUpdateManyWithoutProjectNestedInput
    jobs?: JobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type GenerationUpsertWithoutProductInput = {
    update: XOR<GenerationUpdateWithoutProductInput, GenerationUncheckedUpdateWithoutProductInput>
    create: XOR<GenerationCreateWithoutProductInput, GenerationUncheckedCreateWithoutProductInput>
    where?: GenerationWhereInput
  }

  export type GenerationUpdateToOneWithWhereWithoutProductInput = {
    where?: GenerationWhereInput
    data: XOR<GenerationUpdateWithoutProductInput, GenerationUncheckedUpdateWithoutProductInput>
  }

  export type GenerationUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenerationUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutGenerationInput = {
    id?: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    imageAlt?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutGenerationInput = {
    id?: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    imageAlt?: string | null
    createdAt?: Date | string
    projectId: string
  }

  export type ProductCreateOrConnectWithoutGenerationInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutGenerationInput, ProductUncheckedCreateWithoutGenerationInput>
  }

  export type ProductUpsertWithoutGenerationInput = {
    update: XOR<ProductUpdateWithoutGenerationInput, ProductUncheckedUpdateWithoutGenerationInput>
    create: XOR<ProductCreateWithoutGenerationInput, ProductUncheckedCreateWithoutGenerationInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutGenerationInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutGenerationInput, ProductUncheckedUpdateWithoutGenerationInput>
  }

  export type ProductUpdateWithoutGenerationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutGenerationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateWithoutCollectionPagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    products?: ProductCreateNestedManyWithoutProjectInput
    jobs?: JobCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCollectionPagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    userId: string
    products?: ProductUncheckedCreateNestedManyWithoutProjectInput
    jobs?: JobUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCollectionPagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCollectionPagesInput, ProjectUncheckedCreateWithoutCollectionPagesInput>
  }

  export type CollectionGenerationCreateWithoutCollectionPageInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
  }

  export type CollectionGenerationUncheckedCreateWithoutCollectionPageInput = {
    id?: string
    optimizedTitle: string
    optimizedDescription: string
    seoKeywords: string
    seoScore: number
    createdAt?: Date | string
  }

  export type CollectionGenerationCreateOrConnectWithoutCollectionPageInput = {
    where: CollectionGenerationWhereUniqueInput
    create: XOR<CollectionGenerationCreateWithoutCollectionPageInput, CollectionGenerationUncheckedCreateWithoutCollectionPageInput>
  }

  export type ProjectUpsertWithoutCollectionPagesInput = {
    update: XOR<ProjectUpdateWithoutCollectionPagesInput, ProjectUncheckedUpdateWithoutCollectionPagesInput>
    create: XOR<ProjectCreateWithoutCollectionPagesInput, ProjectUncheckedCreateWithoutCollectionPagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCollectionPagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCollectionPagesInput, ProjectUncheckedUpdateWithoutCollectionPagesInput>
  }

  export type ProjectUpdateWithoutCollectionPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    products?: ProductUpdateManyWithoutProjectNestedInput
    jobs?: JobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCollectionPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutProjectNestedInput
    jobs?: JobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type CollectionGenerationUpsertWithoutCollectionPageInput = {
    update: XOR<CollectionGenerationUpdateWithoutCollectionPageInput, CollectionGenerationUncheckedUpdateWithoutCollectionPageInput>
    create: XOR<CollectionGenerationCreateWithoutCollectionPageInput, CollectionGenerationUncheckedCreateWithoutCollectionPageInput>
    where?: CollectionGenerationWhereInput
  }

  export type CollectionGenerationUpdateToOneWithWhereWithoutCollectionPageInput = {
    where?: CollectionGenerationWhereInput
    data: XOR<CollectionGenerationUpdateWithoutCollectionPageInput, CollectionGenerationUncheckedUpdateWithoutCollectionPageInput>
  }

  export type CollectionGenerationUpdateWithoutCollectionPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionGenerationUncheckedUpdateWithoutCollectionPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    optimizedTitle?: StringFieldUpdateOperationsInput | string
    optimizedDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPageCreateWithoutGenerationInput = {
    id?: string
    label: string
    originalDescription?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutCollectionPagesInput
  }

  export type CollectionPageUncheckedCreateWithoutGenerationInput = {
    id?: string
    label: string
    originalDescription?: string
    createdAt?: Date | string
    projectId: string
  }

  export type CollectionPageCreateOrConnectWithoutGenerationInput = {
    where: CollectionPageWhereUniqueInput
    create: XOR<CollectionPageCreateWithoutGenerationInput, CollectionPageUncheckedCreateWithoutGenerationInput>
  }

  export type CollectionPageUpsertWithoutGenerationInput = {
    update: XOR<CollectionPageUpdateWithoutGenerationInput, CollectionPageUncheckedUpdateWithoutGenerationInput>
    create: XOR<CollectionPageCreateWithoutGenerationInput, CollectionPageUncheckedCreateWithoutGenerationInput>
    where?: CollectionPageWhereInput
  }

  export type CollectionPageUpdateToOneWithWhereWithoutGenerationInput = {
    where?: CollectionPageWhereInput
    data: XOR<CollectionPageUpdateWithoutGenerationInput, CollectionPageUncheckedUpdateWithoutGenerationInput>
  }

  export type CollectionPageUpdateWithoutGenerationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCollectionPagesNestedInput
  }

  export type CollectionPageUncheckedUpdateWithoutGenerationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateWithoutJobsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    products?: ProductCreateNestedManyWithoutProjectInput
    collectionPages?: CollectionPageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutJobsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    userId: string
    products?: ProductUncheckedCreateNestedManyWithoutProjectInput
    collectionPages?: CollectionPageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutJobsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutJobsInput, ProjectUncheckedCreateWithoutJobsInput>
  }

  export type ProjectUpsertWithoutJobsInput = {
    update: XOR<ProjectUpdateWithoutJobsInput, ProjectUncheckedUpdateWithoutJobsInput>
    create: XOR<ProjectCreateWithoutJobsInput, ProjectUncheckedCreateWithoutJobsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutJobsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutJobsInput, ProjectUncheckedUpdateWithoutJobsInput>
  }

  export type ProjectUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    products?: ProductUpdateManyWithoutProjectNestedInput
    collectionPages?: CollectionPageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutProjectNestedInput
    collectionPages?: CollectionPageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutUsageMonthlyInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    plan?: $Enums.SubscriptionPlan
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsageMonthlyInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    plan?: $Enums.SubscriptionPlan
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsageMonthlyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsageMonthlyInput, UserUncheckedCreateWithoutUsageMonthlyInput>
  }

  export type UserUpsertWithoutUsageMonthlyInput = {
    update: XOR<UserUpdateWithoutUsageMonthlyInput, UserUncheckedUpdateWithoutUsageMonthlyInput>
    create: XOR<UserCreateWithoutUsageMonthlyInput, UserUncheckedCreateWithoutUsageMonthlyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsageMonthlyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsageMonthlyInput, UserUncheckedUpdateWithoutUsageMonthlyInput>
  }

  export type UserUpdateWithoutUsageMonthlyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsageMonthlyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type UsageMonthlyCreateManyUserInput = {
    id?: string
    monthKey: string
    optimizedProducts?: number
    estimatedCostCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutProjectNestedInput
    collectionPages?: CollectionPageUpdateManyWithoutProjectNestedInput
    jobs?: JobUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutProjectNestedInput
    collectionPages?: CollectionPageUncheckedUpdateManyWithoutProjectNestedInput
    jobs?: JobUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMonthlyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    optimizedProducts?: IntFieldUpdateOperationsInput | number
    estimatedCostCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMonthlyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    optimizedProducts?: IntFieldUpdateOperationsInput | number
    estimatedCostCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMonthlyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    optimizedProducts?: IntFieldUpdateOperationsInput | number
    estimatedCostCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyProjectInput = {
    id?: string
    originalTitle: string
    originalDescription: string
    price: number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    imageAlt?: string | null
    createdAt?: Date | string
  }

  export type CollectionPageCreateManyProjectInput = {
    id?: string
    label: string
    originalDescription?: string
    createdAt?: Date | string
  }

  export type JobCreateManyProjectInput = {
    id?: string
    status?: $Enums.JobStatus
    progress?: number
    createdAt?: Date | string
    errorMessage?: string | null
  }

  export type ProductUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: GenerationUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: GenerationUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: CollectionGenerationUpdateOneWithoutCollectionPageNestedInput
  }

  export type CollectionPageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: CollectionGenerationUncheckedUpdateOneWithoutCollectionPageNestedInput
  }

  export type CollectionPageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    originalDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}