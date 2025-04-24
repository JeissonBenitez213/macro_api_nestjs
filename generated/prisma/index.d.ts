
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Empleado
 * 
 */
export type Empleado = $Result.DefaultSelection<Prisma.$EmpleadoPayload>
/**
 * Model PcData
 * 
 */
export type PcData = $Result.DefaultSelection<Prisma.$PcDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empleados
 * const empleados = await prisma.empleado.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Empleados
   * const empleados = await prisma.empleado.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empleado`: Exposes CRUD operations for the **Empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.EmpleadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pcData`: Exposes CRUD operations for the **PcData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PcData
    * const pcData = await prisma.pcData.findMany()
    * ```
    */
  get pcData(): Prisma.PcDataDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Empleado: 'Empleado',
    PcData: 'PcData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "empleado" | "pcData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empleado: {
        payload: Prisma.$EmpleadoPayload<ExtArgs>
        fields: Prisma.EmpleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findFirst: {
            args: Prisma.EmpleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findMany: {
            args: Prisma.EmpleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          create: {
            args: Prisma.EmpleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          createMany: {
            args: Prisma.EmpleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpleadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          delete: {
            args: Prisma.EmpleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          update: {
            args: Prisma.EmpleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          deleteMany: {
            args: Prisma.EmpleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpleadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          upsert: {
            args: Prisma.EmpleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.EmpleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      PcData: {
        payload: Prisma.$PcDataPayload<ExtArgs>
        fields: Prisma.PcDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PcDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PcDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>
          }
          findFirst: {
            args: Prisma.PcDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PcDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>
          }
          findMany: {
            args: Prisma.PcDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>[]
          }
          create: {
            args: Prisma.PcDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>
          }
          createMany: {
            args: Prisma.PcDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PcDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>[]
          }
          delete: {
            args: Prisma.PcDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>
          }
          update: {
            args: Prisma.PcDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>
          }
          deleteMany: {
            args: Prisma.PcDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PcDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PcDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>[]
          }
          upsert: {
            args: Prisma.PcDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PcDataPayload>
          }
          aggregate: {
            args: Prisma.PcDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePcData>
          }
          groupBy: {
            args: Prisma.PcDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PcDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PcDataCountArgs<ExtArgs>
            result: $Utils.Optional<PcDataCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    empleado?: EmpleadoOmit
    pcData?: PcDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpleadoSumAggregateOutputType = {
    id: number | null
  }

  export type EmpleadoMinAggregateOutputType = {
    id: number | null
    Empleado: string | null
    Correo: string | null
    Contraseña: string | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    id: number | null
    Empleado: string | null
    Correo: string | null
    Contraseña: string | null
  }

  export type EmpleadoCountAggregateOutputType = {
    id: number
    Empleado: number
    Correo: number
    Contraseña: number
    _all: number
  }


  export type EmpleadoAvgAggregateInputType = {
    id?: true
  }

  export type EmpleadoSumAggregateInputType = {
    id?: true
  }

  export type EmpleadoMinAggregateInputType = {
    id?: true
    Empleado?: true
    Correo?: true
    Contraseña?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    id?: true
    Empleado?: true
    Correo?: true
    Contraseña?: true
  }

  export type EmpleadoCountAggregateInputType = {
    id?: true
    Empleado?: true
    Correo?: true
    Contraseña?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleado to aggregate.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type EmpleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithAggregationInput | EmpleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: EmpleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _avg?: EmpleadoAvgAggregateInputType
    _sum?: EmpleadoSumAggregateInputType
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    id: number
    Empleado: string | null
    Correo: string | null
    Contraseña: string | null
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends EmpleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type EmpleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Empleado?: boolean
    Correo?: boolean
    Contraseña?: boolean
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Empleado?: boolean
    Correo?: boolean
    Contraseña?: boolean
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Empleado?: boolean
    Correo?: boolean
    Contraseña?: boolean
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectScalar = {
    id?: boolean
    Empleado?: boolean
    Correo?: boolean
    Contraseña?: boolean
  }

  export type EmpleadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Empleado" | "Correo" | "Contraseña", ExtArgs["result"]["empleado"]>

  export type $EmpleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empleado"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Empleado: string | null
      Correo: string | null
      Contraseña: string | null
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type EmpleadoGetPayload<S extends boolean | null | undefined | EmpleadoDefaultArgs> = $Result.GetResult<Prisma.$EmpleadoPayload, S>

  type EmpleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpleadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface EmpleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empleado'], meta: { name: 'Empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {EmpleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpleadoFindUniqueArgs>(args: SelectSubset<T, EmpleadoFindUniqueArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpleadoFindFirstArgs>(args?: SelectSubset<T, EmpleadoFindFirstArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empleadoWithIdOnly = await prisma.empleado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpleadoFindManyArgs>(args?: SelectSubset<T, EmpleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empleado.
     * @param {EmpleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends EmpleadoCreateArgs>(args: SelectSubset<T, EmpleadoCreateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empleados.
     * @param {EmpleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpleadoCreateManyArgs>(args?: SelectSubset<T, EmpleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empleados and returns the data saved in the database.
     * @param {EmpleadoCreateManyAndReturnArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empleados and only return the `id`
     * const empleadoWithIdOnly = await prisma.empleado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpleadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpleadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empleado.
     * @param {EmpleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends EmpleadoDeleteArgs>(args: SelectSubset<T, EmpleadoDeleteArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empleado.
     * @param {EmpleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpleadoUpdateArgs>(args: SelectSubset<T, EmpleadoUpdateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empleados.
     * @param {EmpleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpleadoDeleteManyArgs>(args?: SelectSubset<T, EmpleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpleadoUpdateManyArgs>(args: SelectSubset<T, EmpleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados and returns the data updated in the database.
     * @param {EmpleadoUpdateManyAndReturnArgs} args - Arguments to update many Empleados.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empleados and only return the `id`
     * const empleadoWithIdOnly = await prisma.empleado.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmpleadoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpleadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empleado.
     * @param {EmpleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends EmpleadoUpsertArgs>(args: SelectSubset<T, EmpleadoUpsertArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends EmpleadoCountArgs>(
      args?: Subset<T, EmpleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoGroupByArgs} args - Group by arguments.
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
      T extends EmpleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpleadoGroupByArgs['orderBy'] }
        : { orderBy?: EmpleadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empleado model
   */
  readonly fields: EmpleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Empleado model
   */
  interface EmpleadoFieldRefs {
    readonly id: FieldRef<"Empleado", 'Int'>
    readonly Empleado: FieldRef<"Empleado", 'String'>
    readonly Correo: FieldRef<"Empleado", 'String'>
    readonly Contraseña: FieldRef<"Empleado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empleado findUnique
   */
  export type EmpleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findUniqueOrThrow
   */
  export type EmpleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findFirst
   */
  export type EmpleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findFirstOrThrow
   */
  export type EmpleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findMany
   */
  export type EmpleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado create
   */
  export type EmpleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data needed to create a Empleado.
     */
    data?: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
  }

  /**
   * Empleado createMany
   */
  export type EmpleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado createManyAndReturn
   */
  export type EmpleadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado update
   */
  export type EmpleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data needed to update a Empleado.
     */
    data: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
    /**
     * Choose, which Empleado to update.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado updateMany
   */
  export type EmpleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
  }

  /**
   * Empleado updateManyAndReturn
   */
  export type EmpleadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
  }

  /**
   * Empleado upsert
   */
  export type EmpleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The filter to search for the Empleado to update in case it exists.
     */
    where: EmpleadoWhereUniqueInput
    /**
     * In case the Empleado found by the `where` argument doesn't exist, create a new Empleado with this data.
     */
    create: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
    /**
     * In case the Empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
  }

  /**
   * Empleado delete
   */
  export type EmpleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Filter which Empleado to delete.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado deleteMany
   */
  export type EmpleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleados to delete
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to delete.
     */
    limit?: number
  }

  /**
   * Empleado without action
   */
  export type EmpleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
  }


  /**
   * Model PcData
   */

  export type AggregatePcData = {
    _count: PcDataCountAggregateOutputType | null
    _avg: PcDataAvgAggregateOutputType | null
    _sum: PcDataSumAggregateOutputType | null
    _min: PcDataMinAggregateOutputType | null
    _max: PcDataMaxAggregateOutputType | null
  }

  export type PcDataAvgAggregateOutputType = {
    id: number | null
  }

  export type PcDataSumAggregateOutputType = {
    id: number | null
  }

  export type PcDataMinAggregateOutputType = {
    id: number | null
    ip: string | null
    CPU: string | null
    RAM: string | null
    NombreEquipo: string | null
    Usuario: string | null
    SistemaOperativo: string | null
    versionExcel: string | null
    rutaApp: string | null
    fechaHora: Date | null
    memoriaLibre: string | null
    espacioDisco: string | null
    direccionMAC: string | null
    puertoAbierto: string | null
    estadoRed: string | null
    fechaInicioApp: Date | null
  }

  export type PcDataMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    CPU: string | null
    RAM: string | null
    NombreEquipo: string | null
    Usuario: string | null
    SistemaOperativo: string | null
    versionExcel: string | null
    rutaApp: string | null
    fechaHora: Date | null
    memoriaLibre: string | null
    espacioDisco: string | null
    direccionMAC: string | null
    puertoAbierto: string | null
    estadoRed: string | null
    fechaInicioApp: Date | null
  }

  export type PcDataCountAggregateOutputType = {
    id: number
    ip: number
    CPU: number
    RAM: number
    NombreEquipo: number
    Usuario: number
    SistemaOperativo: number
    versionExcel: number
    rutaApp: number
    fechaHora: number
    memoriaLibre: number
    espacioDisco: number
    direccionMAC: number
    puertoAbierto: number
    estadoRed: number
    fechaInicioApp: number
    _all: number
  }


  export type PcDataAvgAggregateInputType = {
    id?: true
  }

  export type PcDataSumAggregateInputType = {
    id?: true
  }

  export type PcDataMinAggregateInputType = {
    id?: true
    ip?: true
    CPU?: true
    RAM?: true
    NombreEquipo?: true
    Usuario?: true
    SistemaOperativo?: true
    versionExcel?: true
    rutaApp?: true
    fechaHora?: true
    memoriaLibre?: true
    espacioDisco?: true
    direccionMAC?: true
    puertoAbierto?: true
    estadoRed?: true
    fechaInicioApp?: true
  }

  export type PcDataMaxAggregateInputType = {
    id?: true
    ip?: true
    CPU?: true
    RAM?: true
    NombreEquipo?: true
    Usuario?: true
    SistemaOperativo?: true
    versionExcel?: true
    rutaApp?: true
    fechaHora?: true
    memoriaLibre?: true
    espacioDisco?: true
    direccionMAC?: true
    puertoAbierto?: true
    estadoRed?: true
    fechaInicioApp?: true
  }

  export type PcDataCountAggregateInputType = {
    id?: true
    ip?: true
    CPU?: true
    RAM?: true
    NombreEquipo?: true
    Usuario?: true
    SistemaOperativo?: true
    versionExcel?: true
    rutaApp?: true
    fechaHora?: true
    memoriaLibre?: true
    espacioDisco?: true
    direccionMAC?: true
    puertoAbierto?: true
    estadoRed?: true
    fechaInicioApp?: true
    _all?: true
  }

  export type PcDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PcData to aggregate.
     */
    where?: PcDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PcData to fetch.
     */
    orderBy?: PcDataOrderByWithRelationInput | PcDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PcDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PcData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PcData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PcData
    **/
    _count?: true | PcDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PcDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PcDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PcDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PcDataMaxAggregateInputType
  }

  export type GetPcDataAggregateType<T extends PcDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePcData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePcData[P]>
      : GetScalarType<T[P], AggregatePcData[P]>
  }




  export type PcDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PcDataWhereInput
    orderBy?: PcDataOrderByWithAggregationInput | PcDataOrderByWithAggregationInput[]
    by: PcDataScalarFieldEnum[] | PcDataScalarFieldEnum
    having?: PcDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PcDataCountAggregateInputType | true
    _avg?: PcDataAvgAggregateInputType
    _sum?: PcDataSumAggregateInputType
    _min?: PcDataMinAggregateInputType
    _max?: PcDataMaxAggregateInputType
  }

  export type PcDataGroupByOutputType = {
    id: number
    ip: string | null
    CPU: string | null
    RAM: string | null
    NombreEquipo: string | null
    Usuario: string | null
    SistemaOperativo: string | null
    versionExcel: string | null
    rutaApp: string | null
    fechaHora: Date | null
    memoriaLibre: string | null
    espacioDisco: string | null
    direccionMAC: string | null
    puertoAbierto: string | null
    estadoRed: string | null
    fechaInicioApp: Date | null
    _count: PcDataCountAggregateOutputType | null
    _avg: PcDataAvgAggregateOutputType | null
    _sum: PcDataSumAggregateOutputType | null
    _min: PcDataMinAggregateOutputType | null
    _max: PcDataMaxAggregateOutputType | null
  }

  type GetPcDataGroupByPayload<T extends PcDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PcDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PcDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PcDataGroupByOutputType[P]>
            : GetScalarType<T[P], PcDataGroupByOutputType[P]>
        }
      >
    >


  export type PcDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    CPU?: boolean
    RAM?: boolean
    NombreEquipo?: boolean
    Usuario?: boolean
    SistemaOperativo?: boolean
    versionExcel?: boolean
    rutaApp?: boolean
    fechaHora?: boolean
    memoriaLibre?: boolean
    espacioDisco?: boolean
    direccionMAC?: boolean
    puertoAbierto?: boolean
    estadoRed?: boolean
    fechaInicioApp?: boolean
  }, ExtArgs["result"]["pcData"]>

  export type PcDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    CPU?: boolean
    RAM?: boolean
    NombreEquipo?: boolean
    Usuario?: boolean
    SistemaOperativo?: boolean
    versionExcel?: boolean
    rutaApp?: boolean
    fechaHora?: boolean
    memoriaLibre?: boolean
    espacioDisco?: boolean
    direccionMAC?: boolean
    puertoAbierto?: boolean
    estadoRed?: boolean
    fechaInicioApp?: boolean
  }, ExtArgs["result"]["pcData"]>

  export type PcDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    CPU?: boolean
    RAM?: boolean
    NombreEquipo?: boolean
    Usuario?: boolean
    SistemaOperativo?: boolean
    versionExcel?: boolean
    rutaApp?: boolean
    fechaHora?: boolean
    memoriaLibre?: boolean
    espacioDisco?: boolean
    direccionMAC?: boolean
    puertoAbierto?: boolean
    estadoRed?: boolean
    fechaInicioApp?: boolean
  }, ExtArgs["result"]["pcData"]>

  export type PcDataSelectScalar = {
    id?: boolean
    ip?: boolean
    CPU?: boolean
    RAM?: boolean
    NombreEquipo?: boolean
    Usuario?: boolean
    SistemaOperativo?: boolean
    versionExcel?: boolean
    rutaApp?: boolean
    fechaHora?: boolean
    memoriaLibre?: boolean
    espacioDisco?: boolean
    direccionMAC?: boolean
    puertoAbierto?: boolean
    estadoRed?: boolean
    fechaInicioApp?: boolean
  }

  export type PcDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "CPU" | "RAM" | "NombreEquipo" | "Usuario" | "SistemaOperativo" | "versionExcel" | "rutaApp" | "fechaHora" | "memoriaLibre" | "espacioDisco" | "direccionMAC" | "puertoAbierto" | "estadoRed" | "fechaInicioApp", ExtArgs["result"]["pcData"]>

  export type $PcDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PcData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ip: string | null
      CPU: string | null
      RAM: string | null
      NombreEquipo: string | null
      Usuario: string | null
      SistemaOperativo: string | null
      versionExcel: string | null
      rutaApp: string | null
      fechaHora: Date | null
      memoriaLibre: string | null
      espacioDisco: string | null
      direccionMAC: string | null
      puertoAbierto: string | null
      estadoRed: string | null
      fechaInicioApp: Date | null
    }, ExtArgs["result"]["pcData"]>
    composites: {}
  }

  type PcDataGetPayload<S extends boolean | null | undefined | PcDataDefaultArgs> = $Result.GetResult<Prisma.$PcDataPayload, S>

  type PcDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PcDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PcDataCountAggregateInputType | true
    }

  export interface PcDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PcData'], meta: { name: 'PcData' } }
    /**
     * Find zero or one PcData that matches the filter.
     * @param {PcDataFindUniqueArgs} args - Arguments to find a PcData
     * @example
     * // Get one PcData
     * const pcData = await prisma.pcData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PcDataFindUniqueArgs>(args: SelectSubset<T, PcDataFindUniqueArgs<ExtArgs>>): Prisma__PcDataClient<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PcData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PcDataFindUniqueOrThrowArgs} args - Arguments to find a PcData
     * @example
     * // Get one PcData
     * const pcData = await prisma.pcData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PcDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PcDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PcDataClient<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PcData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PcDataFindFirstArgs} args - Arguments to find a PcData
     * @example
     * // Get one PcData
     * const pcData = await prisma.pcData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PcDataFindFirstArgs>(args?: SelectSubset<T, PcDataFindFirstArgs<ExtArgs>>): Prisma__PcDataClient<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PcData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PcDataFindFirstOrThrowArgs} args - Arguments to find a PcData
     * @example
     * // Get one PcData
     * const pcData = await prisma.pcData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PcDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PcDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PcDataClient<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PcData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PcDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PcData
     * const pcData = await prisma.pcData.findMany()
     * 
     * // Get first 10 PcData
     * const pcData = await prisma.pcData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pcDataWithIdOnly = await prisma.pcData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PcDataFindManyArgs>(args?: SelectSubset<T, PcDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PcData.
     * @param {PcDataCreateArgs} args - Arguments to create a PcData.
     * @example
     * // Create one PcData
     * const PcData = await prisma.pcData.create({
     *   data: {
     *     // ... data to create a PcData
     *   }
     * })
     * 
     */
    create<T extends PcDataCreateArgs>(args: SelectSubset<T, PcDataCreateArgs<ExtArgs>>): Prisma__PcDataClient<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PcData.
     * @param {PcDataCreateManyArgs} args - Arguments to create many PcData.
     * @example
     * // Create many PcData
     * const pcData = await prisma.pcData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PcDataCreateManyArgs>(args?: SelectSubset<T, PcDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PcData and returns the data saved in the database.
     * @param {PcDataCreateManyAndReturnArgs} args - Arguments to create many PcData.
     * @example
     * // Create many PcData
     * const pcData = await prisma.pcData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PcData and only return the `id`
     * const pcDataWithIdOnly = await prisma.pcData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PcDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PcDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PcData.
     * @param {PcDataDeleteArgs} args - Arguments to delete one PcData.
     * @example
     * // Delete one PcData
     * const PcData = await prisma.pcData.delete({
     *   where: {
     *     // ... filter to delete one PcData
     *   }
     * })
     * 
     */
    delete<T extends PcDataDeleteArgs>(args: SelectSubset<T, PcDataDeleteArgs<ExtArgs>>): Prisma__PcDataClient<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PcData.
     * @param {PcDataUpdateArgs} args - Arguments to update one PcData.
     * @example
     * // Update one PcData
     * const pcData = await prisma.pcData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PcDataUpdateArgs>(args: SelectSubset<T, PcDataUpdateArgs<ExtArgs>>): Prisma__PcDataClient<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PcData.
     * @param {PcDataDeleteManyArgs} args - Arguments to filter PcData to delete.
     * @example
     * // Delete a few PcData
     * const { count } = await prisma.pcData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PcDataDeleteManyArgs>(args?: SelectSubset<T, PcDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PcData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PcDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PcData
     * const pcData = await prisma.pcData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PcDataUpdateManyArgs>(args: SelectSubset<T, PcDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PcData and returns the data updated in the database.
     * @param {PcDataUpdateManyAndReturnArgs} args - Arguments to update many PcData.
     * @example
     * // Update many PcData
     * const pcData = await prisma.pcData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PcData and only return the `id`
     * const pcDataWithIdOnly = await prisma.pcData.updateManyAndReturn({
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
    updateManyAndReturn<T extends PcDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PcDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PcData.
     * @param {PcDataUpsertArgs} args - Arguments to update or create a PcData.
     * @example
     * // Update or create a PcData
     * const pcData = await prisma.pcData.upsert({
     *   create: {
     *     // ... data to create a PcData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PcData we want to update
     *   }
     * })
     */
    upsert<T extends PcDataUpsertArgs>(args: SelectSubset<T, PcDataUpsertArgs<ExtArgs>>): Prisma__PcDataClient<$Result.GetResult<Prisma.$PcDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PcData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PcDataCountArgs} args - Arguments to filter PcData to count.
     * @example
     * // Count the number of PcData
     * const count = await prisma.pcData.count({
     *   where: {
     *     // ... the filter for the PcData we want to count
     *   }
     * })
    **/
    count<T extends PcDataCountArgs>(
      args?: Subset<T, PcDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PcDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PcData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PcDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PcDataAggregateArgs>(args: Subset<T, PcDataAggregateArgs>): Prisma.PrismaPromise<GetPcDataAggregateType<T>>

    /**
     * Group by PcData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PcDataGroupByArgs} args - Group by arguments.
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
      T extends PcDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PcDataGroupByArgs['orderBy'] }
        : { orderBy?: PcDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PcDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPcDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PcData model
   */
  readonly fields: PcDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PcData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PcDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PcData model
   */
  interface PcDataFieldRefs {
    readonly id: FieldRef<"PcData", 'Int'>
    readonly ip: FieldRef<"PcData", 'String'>
    readonly CPU: FieldRef<"PcData", 'String'>
    readonly RAM: FieldRef<"PcData", 'String'>
    readonly NombreEquipo: FieldRef<"PcData", 'String'>
    readonly Usuario: FieldRef<"PcData", 'String'>
    readonly SistemaOperativo: FieldRef<"PcData", 'String'>
    readonly versionExcel: FieldRef<"PcData", 'String'>
    readonly rutaApp: FieldRef<"PcData", 'String'>
    readonly fechaHora: FieldRef<"PcData", 'DateTime'>
    readonly memoriaLibre: FieldRef<"PcData", 'String'>
    readonly espacioDisco: FieldRef<"PcData", 'String'>
    readonly direccionMAC: FieldRef<"PcData", 'String'>
    readonly puertoAbierto: FieldRef<"PcData", 'String'>
    readonly estadoRed: FieldRef<"PcData", 'String'>
    readonly fechaInicioApp: FieldRef<"PcData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PcData findUnique
   */
  export type PcDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * Filter, which PcData to fetch.
     */
    where: PcDataWhereUniqueInput
  }

  /**
   * PcData findUniqueOrThrow
   */
  export type PcDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * Filter, which PcData to fetch.
     */
    where: PcDataWhereUniqueInput
  }

  /**
   * PcData findFirst
   */
  export type PcDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * Filter, which PcData to fetch.
     */
    where?: PcDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PcData to fetch.
     */
    orderBy?: PcDataOrderByWithRelationInput | PcDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PcData.
     */
    cursor?: PcDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PcData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PcData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PcData.
     */
    distinct?: PcDataScalarFieldEnum | PcDataScalarFieldEnum[]
  }

  /**
   * PcData findFirstOrThrow
   */
  export type PcDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * Filter, which PcData to fetch.
     */
    where?: PcDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PcData to fetch.
     */
    orderBy?: PcDataOrderByWithRelationInput | PcDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PcData.
     */
    cursor?: PcDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PcData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PcData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PcData.
     */
    distinct?: PcDataScalarFieldEnum | PcDataScalarFieldEnum[]
  }

  /**
   * PcData findMany
   */
  export type PcDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * Filter, which PcData to fetch.
     */
    where?: PcDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PcData to fetch.
     */
    orderBy?: PcDataOrderByWithRelationInput | PcDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PcData.
     */
    cursor?: PcDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PcData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PcData.
     */
    skip?: number
    distinct?: PcDataScalarFieldEnum | PcDataScalarFieldEnum[]
  }

  /**
   * PcData create
   */
  export type PcDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * The data needed to create a PcData.
     */
    data?: XOR<PcDataCreateInput, PcDataUncheckedCreateInput>
  }

  /**
   * PcData createMany
   */
  export type PcDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PcData.
     */
    data: PcDataCreateManyInput | PcDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PcData createManyAndReturn
   */
  export type PcDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * The data used to create many PcData.
     */
    data: PcDataCreateManyInput | PcDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PcData update
   */
  export type PcDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * The data needed to update a PcData.
     */
    data: XOR<PcDataUpdateInput, PcDataUncheckedUpdateInput>
    /**
     * Choose, which PcData to update.
     */
    where: PcDataWhereUniqueInput
  }

  /**
   * PcData updateMany
   */
  export type PcDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PcData.
     */
    data: XOR<PcDataUpdateManyMutationInput, PcDataUncheckedUpdateManyInput>
    /**
     * Filter which PcData to update
     */
    where?: PcDataWhereInput
    /**
     * Limit how many PcData to update.
     */
    limit?: number
  }

  /**
   * PcData updateManyAndReturn
   */
  export type PcDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * The data used to update PcData.
     */
    data: XOR<PcDataUpdateManyMutationInput, PcDataUncheckedUpdateManyInput>
    /**
     * Filter which PcData to update
     */
    where?: PcDataWhereInput
    /**
     * Limit how many PcData to update.
     */
    limit?: number
  }

  /**
   * PcData upsert
   */
  export type PcDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * The filter to search for the PcData to update in case it exists.
     */
    where: PcDataWhereUniqueInput
    /**
     * In case the PcData found by the `where` argument doesn't exist, create a new PcData with this data.
     */
    create: XOR<PcDataCreateInput, PcDataUncheckedCreateInput>
    /**
     * In case the PcData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PcDataUpdateInput, PcDataUncheckedUpdateInput>
  }

  /**
   * PcData delete
   */
  export type PcDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
    /**
     * Filter which PcData to delete.
     */
    where: PcDataWhereUniqueInput
  }

  /**
   * PcData deleteMany
   */
  export type PcDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PcData to delete
     */
    where?: PcDataWhereInput
    /**
     * Limit how many PcData to delete.
     */
    limit?: number
  }

  /**
   * PcData without action
   */
  export type PcDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PcData
     */
    select?: PcDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PcData
     */
    omit?: PcDataOmit<ExtArgs> | null
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


  export const EmpleadoScalarFieldEnum: {
    id: 'id',
    Empleado: 'Empleado',
    Correo: 'Correo',
    Contraseña: 'Contraseña'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const PcDataScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    CPU: 'CPU',
    RAM: 'RAM',
    NombreEquipo: 'NombreEquipo',
    Usuario: 'Usuario',
    SistemaOperativo: 'SistemaOperativo',
    versionExcel: 'versionExcel',
    rutaApp: 'rutaApp',
    fechaHora: 'fechaHora',
    memoriaLibre: 'memoriaLibre',
    espacioDisco: 'espacioDisco',
    direccionMAC: 'direccionMAC',
    puertoAbierto: 'puertoAbierto',
    estadoRed: 'estadoRed',
    fechaInicioApp: 'fechaInicioApp'
  };

  export type PcDataScalarFieldEnum = (typeof PcDataScalarFieldEnum)[keyof typeof PcDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EmpleadoWhereInput = {
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    id?: IntFilter<"Empleado"> | number
    Empleado?: StringNullableFilter<"Empleado"> | string | null
    Correo?: StringNullableFilter<"Empleado"> | string | null
    Contraseña?: StringNullableFilter<"Empleado"> | string | null
  }

  export type EmpleadoOrderByWithRelationInput = {
    id?: SortOrder
    Empleado?: SortOrderInput | SortOrder
    Correo?: SortOrderInput | SortOrder
    Contraseña?: SortOrderInput | SortOrder
  }

  export type EmpleadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    Empleado?: StringNullableFilter<"Empleado"> | string | null
    Correo?: StringNullableFilter<"Empleado"> | string | null
    Contraseña?: StringNullableFilter<"Empleado"> | string | null
  }, "id">

  export type EmpleadoOrderByWithAggregationInput = {
    id?: SortOrder
    Empleado?: SortOrderInput | SortOrder
    Correo?: SortOrderInput | SortOrder
    Contraseña?: SortOrderInput | SortOrder
    _count?: EmpleadoCountOrderByAggregateInput
    _avg?: EmpleadoAvgOrderByAggregateInput
    _max?: EmpleadoMaxOrderByAggregateInput
    _min?: EmpleadoMinOrderByAggregateInput
    _sum?: EmpleadoSumOrderByAggregateInput
  }

  export type EmpleadoScalarWhereWithAggregatesInput = {
    AND?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    OR?: EmpleadoScalarWhereWithAggregatesInput[]
    NOT?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empleado"> | number
    Empleado?: StringNullableWithAggregatesFilter<"Empleado"> | string | null
    Correo?: StringNullableWithAggregatesFilter<"Empleado"> | string | null
    Contraseña?: StringNullableWithAggregatesFilter<"Empleado"> | string | null
  }

  export type PcDataWhereInput = {
    AND?: PcDataWhereInput | PcDataWhereInput[]
    OR?: PcDataWhereInput[]
    NOT?: PcDataWhereInput | PcDataWhereInput[]
    id?: IntFilter<"PcData"> | number
    ip?: StringNullableFilter<"PcData"> | string | null
    CPU?: StringNullableFilter<"PcData"> | string | null
    RAM?: StringNullableFilter<"PcData"> | string | null
    NombreEquipo?: StringNullableFilter<"PcData"> | string | null
    Usuario?: StringNullableFilter<"PcData"> | string | null
    SistemaOperativo?: StringNullableFilter<"PcData"> | string | null
    versionExcel?: StringNullableFilter<"PcData"> | string | null
    rutaApp?: StringNullableFilter<"PcData"> | string | null
    fechaHora?: DateTimeNullableFilter<"PcData"> | Date | string | null
    memoriaLibre?: StringNullableFilter<"PcData"> | string | null
    espacioDisco?: StringNullableFilter<"PcData"> | string | null
    direccionMAC?: StringNullableFilter<"PcData"> | string | null
    puertoAbierto?: StringNullableFilter<"PcData"> | string | null
    estadoRed?: StringNullableFilter<"PcData"> | string | null
    fechaInicioApp?: DateTimeNullableFilter<"PcData"> | Date | string | null
  }

  export type PcDataOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrderInput | SortOrder
    CPU?: SortOrderInput | SortOrder
    RAM?: SortOrderInput | SortOrder
    NombreEquipo?: SortOrderInput | SortOrder
    Usuario?: SortOrderInput | SortOrder
    SistemaOperativo?: SortOrderInput | SortOrder
    versionExcel?: SortOrderInput | SortOrder
    rutaApp?: SortOrderInput | SortOrder
    fechaHora?: SortOrderInput | SortOrder
    memoriaLibre?: SortOrderInput | SortOrder
    espacioDisco?: SortOrderInput | SortOrder
    direccionMAC?: SortOrderInput | SortOrder
    puertoAbierto?: SortOrderInput | SortOrder
    estadoRed?: SortOrderInput | SortOrder
    fechaInicioApp?: SortOrderInput | SortOrder
  }

  export type PcDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PcDataWhereInput | PcDataWhereInput[]
    OR?: PcDataWhereInput[]
    NOT?: PcDataWhereInput | PcDataWhereInput[]
    ip?: StringNullableFilter<"PcData"> | string | null
    CPU?: StringNullableFilter<"PcData"> | string | null
    RAM?: StringNullableFilter<"PcData"> | string | null
    NombreEquipo?: StringNullableFilter<"PcData"> | string | null
    Usuario?: StringNullableFilter<"PcData"> | string | null
    SistemaOperativo?: StringNullableFilter<"PcData"> | string | null
    versionExcel?: StringNullableFilter<"PcData"> | string | null
    rutaApp?: StringNullableFilter<"PcData"> | string | null
    fechaHora?: DateTimeNullableFilter<"PcData"> | Date | string | null
    memoriaLibre?: StringNullableFilter<"PcData"> | string | null
    espacioDisco?: StringNullableFilter<"PcData"> | string | null
    direccionMAC?: StringNullableFilter<"PcData"> | string | null
    puertoAbierto?: StringNullableFilter<"PcData"> | string | null
    estadoRed?: StringNullableFilter<"PcData"> | string | null
    fechaInicioApp?: DateTimeNullableFilter<"PcData"> | Date | string | null
  }, "id">

  export type PcDataOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrderInput | SortOrder
    CPU?: SortOrderInput | SortOrder
    RAM?: SortOrderInput | SortOrder
    NombreEquipo?: SortOrderInput | SortOrder
    Usuario?: SortOrderInput | SortOrder
    SistemaOperativo?: SortOrderInput | SortOrder
    versionExcel?: SortOrderInput | SortOrder
    rutaApp?: SortOrderInput | SortOrder
    fechaHora?: SortOrderInput | SortOrder
    memoriaLibre?: SortOrderInput | SortOrder
    espacioDisco?: SortOrderInput | SortOrder
    direccionMAC?: SortOrderInput | SortOrder
    puertoAbierto?: SortOrderInput | SortOrder
    estadoRed?: SortOrderInput | SortOrder
    fechaInicioApp?: SortOrderInput | SortOrder
    _count?: PcDataCountOrderByAggregateInput
    _avg?: PcDataAvgOrderByAggregateInput
    _max?: PcDataMaxOrderByAggregateInput
    _min?: PcDataMinOrderByAggregateInput
    _sum?: PcDataSumOrderByAggregateInput
  }

  export type PcDataScalarWhereWithAggregatesInput = {
    AND?: PcDataScalarWhereWithAggregatesInput | PcDataScalarWhereWithAggregatesInput[]
    OR?: PcDataScalarWhereWithAggregatesInput[]
    NOT?: PcDataScalarWhereWithAggregatesInput | PcDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PcData"> | number
    ip?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    CPU?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    RAM?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    NombreEquipo?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    Usuario?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    SistemaOperativo?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    versionExcel?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    rutaApp?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    fechaHora?: DateTimeNullableWithAggregatesFilter<"PcData"> | Date | string | null
    memoriaLibre?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    espacioDisco?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    direccionMAC?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    puertoAbierto?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    estadoRed?: StringNullableWithAggregatesFilter<"PcData"> | string | null
    fechaInicioApp?: DateTimeNullableWithAggregatesFilter<"PcData"> | Date | string | null
  }

  export type EmpleadoCreateInput = {
    Empleado?: string | null
    Correo?: string | null
    Contraseña?: string | null
  }

  export type EmpleadoUncheckedCreateInput = {
    id?: number
    Empleado?: string | null
    Correo?: string | null
    Contraseña?: string | null
  }

  export type EmpleadoUpdateInput = {
    Empleado?: NullableStringFieldUpdateOperationsInput | string | null
    Correo?: NullableStringFieldUpdateOperationsInput | string | null
    Contraseña?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpleadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Empleado?: NullableStringFieldUpdateOperationsInput | string | null
    Correo?: NullableStringFieldUpdateOperationsInput | string | null
    Contraseña?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpleadoCreateManyInput = {
    id?: number
    Empleado?: string | null
    Correo?: string | null
    Contraseña?: string | null
  }

  export type EmpleadoUpdateManyMutationInput = {
    Empleado?: NullableStringFieldUpdateOperationsInput | string | null
    Correo?: NullableStringFieldUpdateOperationsInput | string | null
    Contraseña?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpleadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Empleado?: NullableStringFieldUpdateOperationsInput | string | null
    Correo?: NullableStringFieldUpdateOperationsInput | string | null
    Contraseña?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PcDataCreateInput = {
    ip?: string | null
    CPU?: string | null
    RAM?: string | null
    NombreEquipo?: string | null
    Usuario?: string | null
    SistemaOperativo?: string | null
    versionExcel?: string | null
    rutaApp?: string | null
    fechaHora?: Date | string | null
    memoriaLibre?: string | null
    espacioDisco?: string | null
    direccionMAC?: string | null
    puertoAbierto?: string | null
    estadoRed?: string | null
    fechaInicioApp?: Date | string | null
  }

  export type PcDataUncheckedCreateInput = {
    id?: number
    ip?: string | null
    CPU?: string | null
    RAM?: string | null
    NombreEquipo?: string | null
    Usuario?: string | null
    SistemaOperativo?: string | null
    versionExcel?: string | null
    rutaApp?: string | null
    fechaHora?: Date | string | null
    memoriaLibre?: string | null
    espacioDisco?: string | null
    direccionMAC?: string | null
    puertoAbierto?: string | null
    estadoRed?: string | null
    fechaInicioApp?: Date | string | null
  }

  export type PcDataUpdateInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    CPU?: NullableStringFieldUpdateOperationsInput | string | null
    RAM?: NullableStringFieldUpdateOperationsInput | string | null
    NombreEquipo?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario?: NullableStringFieldUpdateOperationsInput | string | null
    SistemaOperativo?: NullableStringFieldUpdateOperationsInput | string | null
    versionExcel?: NullableStringFieldUpdateOperationsInput | string | null
    rutaApp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memoriaLibre?: NullableStringFieldUpdateOperationsInput | string | null
    espacioDisco?: NullableStringFieldUpdateOperationsInput | string | null
    direccionMAC?: NullableStringFieldUpdateOperationsInput | string | null
    puertoAbierto?: NullableStringFieldUpdateOperationsInput | string | null
    estadoRed?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicioApp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PcDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    CPU?: NullableStringFieldUpdateOperationsInput | string | null
    RAM?: NullableStringFieldUpdateOperationsInput | string | null
    NombreEquipo?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario?: NullableStringFieldUpdateOperationsInput | string | null
    SistemaOperativo?: NullableStringFieldUpdateOperationsInput | string | null
    versionExcel?: NullableStringFieldUpdateOperationsInput | string | null
    rutaApp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memoriaLibre?: NullableStringFieldUpdateOperationsInput | string | null
    espacioDisco?: NullableStringFieldUpdateOperationsInput | string | null
    direccionMAC?: NullableStringFieldUpdateOperationsInput | string | null
    puertoAbierto?: NullableStringFieldUpdateOperationsInput | string | null
    estadoRed?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicioApp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PcDataCreateManyInput = {
    id?: number
    ip?: string | null
    CPU?: string | null
    RAM?: string | null
    NombreEquipo?: string | null
    Usuario?: string | null
    SistemaOperativo?: string | null
    versionExcel?: string | null
    rutaApp?: string | null
    fechaHora?: Date | string | null
    memoriaLibre?: string | null
    espacioDisco?: string | null
    direccionMAC?: string | null
    puertoAbierto?: string | null
    estadoRed?: string | null
    fechaInicioApp?: Date | string | null
  }

  export type PcDataUpdateManyMutationInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    CPU?: NullableStringFieldUpdateOperationsInput | string | null
    RAM?: NullableStringFieldUpdateOperationsInput | string | null
    NombreEquipo?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario?: NullableStringFieldUpdateOperationsInput | string | null
    SistemaOperativo?: NullableStringFieldUpdateOperationsInput | string | null
    versionExcel?: NullableStringFieldUpdateOperationsInput | string | null
    rutaApp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memoriaLibre?: NullableStringFieldUpdateOperationsInput | string | null
    espacioDisco?: NullableStringFieldUpdateOperationsInput | string | null
    direccionMAC?: NullableStringFieldUpdateOperationsInput | string | null
    puertoAbierto?: NullableStringFieldUpdateOperationsInput | string | null
    estadoRed?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicioApp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PcDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    CPU?: NullableStringFieldUpdateOperationsInput | string | null
    RAM?: NullableStringFieldUpdateOperationsInput | string | null
    NombreEquipo?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario?: NullableStringFieldUpdateOperationsInput | string | null
    SistemaOperativo?: NullableStringFieldUpdateOperationsInput | string | null
    versionExcel?: NullableStringFieldUpdateOperationsInput | string | null
    rutaApp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memoriaLibre?: NullableStringFieldUpdateOperationsInput | string | null
    espacioDisco?: NullableStringFieldUpdateOperationsInput | string | null
    direccionMAC?: NullableStringFieldUpdateOperationsInput | string | null
    puertoAbierto?: NullableStringFieldUpdateOperationsInput | string | null
    estadoRed?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicioApp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmpleadoCountOrderByAggregateInput = {
    id?: SortOrder
    Empleado?: SortOrder
    Correo?: SortOrder
    Contraseña?: SortOrder
  }

  export type EmpleadoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpleadoMaxOrderByAggregateInput = {
    id?: SortOrder
    Empleado?: SortOrder
    Correo?: SortOrder
    Contraseña?: SortOrder
  }

  export type EmpleadoMinOrderByAggregateInput = {
    id?: SortOrder
    Empleado?: SortOrder
    Correo?: SortOrder
    Contraseña?: SortOrder
  }

  export type EmpleadoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PcDataCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    CPU?: SortOrder
    RAM?: SortOrder
    NombreEquipo?: SortOrder
    Usuario?: SortOrder
    SistemaOperativo?: SortOrder
    versionExcel?: SortOrder
    rutaApp?: SortOrder
    fechaHora?: SortOrder
    memoriaLibre?: SortOrder
    espacioDisco?: SortOrder
    direccionMAC?: SortOrder
    puertoAbierto?: SortOrder
    estadoRed?: SortOrder
    fechaInicioApp?: SortOrder
  }

  export type PcDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PcDataMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    CPU?: SortOrder
    RAM?: SortOrder
    NombreEquipo?: SortOrder
    Usuario?: SortOrder
    SistemaOperativo?: SortOrder
    versionExcel?: SortOrder
    rutaApp?: SortOrder
    fechaHora?: SortOrder
    memoriaLibre?: SortOrder
    espacioDisco?: SortOrder
    direccionMAC?: SortOrder
    puertoAbierto?: SortOrder
    estadoRed?: SortOrder
    fechaInicioApp?: SortOrder
  }

  export type PcDataMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    CPU?: SortOrder
    RAM?: SortOrder
    NombreEquipo?: SortOrder
    Usuario?: SortOrder
    SistemaOperativo?: SortOrder
    versionExcel?: SortOrder
    rutaApp?: SortOrder
    fechaHora?: SortOrder
    memoriaLibre?: SortOrder
    espacioDisco?: SortOrder
    direccionMAC?: SortOrder
    puertoAbierto?: SortOrder
    estadoRed?: SortOrder
    fechaInicioApp?: SortOrder
  }

  export type PcDataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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