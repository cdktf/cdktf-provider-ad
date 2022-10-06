# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdProvider <a name="AdProvider" id="@cdktf/provider-ad.provider.AdProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad ad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.provider.AdProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-ad'

new provider.AdProvider(scope: Construct, id: string, config: AdProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.provider.AdProviderConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.provider.AdProviderConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetDomainController">resetDomainController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbConf">resetKrbConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab">resetKrbKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbRealm">resetKrbRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbSpn">resetKrbSpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure">resetWinrmInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials">resetWinrmPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmPort">resetWinrmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmProto">resetWinrmProto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm">resetWinrmUseNtlm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.provider.AdProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.provider.AdProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.provider.AdProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.provider.AdProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-ad.provider.AdProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetDomainController` <a name="resetDomainController" id="@cdktf/provider-ad.provider.AdProvider.resetDomainController"></a>

```typescript
public resetDomainController(): void
```

##### `resetKrbConf` <a name="resetKrbConf" id="@cdktf/provider-ad.provider.AdProvider.resetKrbConf"></a>

```typescript
public resetKrbConf(): void
```

##### `resetKrbKeytab` <a name="resetKrbKeytab" id="@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab"></a>

```typescript
public resetKrbKeytab(): void
```

##### `resetKrbRealm` <a name="resetKrbRealm" id="@cdktf/provider-ad.provider.AdProvider.resetKrbRealm"></a>

```typescript
public resetKrbRealm(): void
```

##### `resetKrbSpn` <a name="resetKrbSpn" id="@cdktf/provider-ad.provider.AdProvider.resetKrbSpn"></a>

```typescript
public resetKrbSpn(): void
```

##### `resetWinrmInsecure` <a name="resetWinrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure"></a>

```typescript
public resetWinrmInsecure(): void
```

##### `resetWinrmPassCredentials` <a name="resetWinrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials"></a>

```typescript
public resetWinrmPassCredentials(): void
```

##### `resetWinrmPort` <a name="resetWinrmPort" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPort"></a>

```typescript
public resetWinrmPort(): void
```

##### `resetWinrmProto` <a name="resetWinrmProto" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmProto"></a>

```typescript
public resetWinrmProto(): void
```

##### `resetWinrmUseNtlm` <a name="resetWinrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm"></a>

```typescript
public resetWinrmUseNtlm(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.provider.AdProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-ad'

provider.AdProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput">domainControllerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConfInput">krbConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput">krbKeytabInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput">krbRealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput">krbSpnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput">winrmHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput">winrmInsecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput">winrmPassCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput">winrmPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput">winrmPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput">winrmProtoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput">winrmUseNtlmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput">winrmUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainController">domainController</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConf">krbConf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytab">krbKeytab</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealm">krbRealm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpn">krbSpn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostname">winrmHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure">winrmInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials">winrmPassCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassword">winrmPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPort">winrmPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProto">winrmProto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm">winrmUseNtlm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsername">winrmUsername</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.provider.AdProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.provider.AdProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.provider.AdProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-ad.provider.AdProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-ad.provider.AdProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `domainControllerInput`<sup>Optional</sup> <a name="domainControllerInput" id="@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput"></a>

```typescript
public readonly domainControllerInput: string;
```

- *Type:* string

---

##### `krbConfInput`<sup>Optional</sup> <a name="krbConfInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbConfInput"></a>

```typescript
public readonly krbConfInput: string;
```

- *Type:* string

---

##### `krbKeytabInput`<sup>Optional</sup> <a name="krbKeytabInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput"></a>

```typescript
public readonly krbKeytabInput: string;
```

- *Type:* string

---

##### `krbRealmInput`<sup>Optional</sup> <a name="krbRealmInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput"></a>

```typescript
public readonly krbRealmInput: string;
```

- *Type:* string

---

##### `krbSpnInput`<sup>Optional</sup> <a name="krbSpnInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput"></a>

```typescript
public readonly krbSpnInput: string;
```

- *Type:* string

---

##### `winrmHostnameInput`<sup>Optional</sup> <a name="winrmHostnameInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput"></a>

```typescript
public readonly winrmHostnameInput: string;
```

- *Type:* string

---

##### `winrmInsecureInput`<sup>Optional</sup> <a name="winrmInsecureInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput"></a>

```typescript
public readonly winrmInsecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `winrmPassCredentialsInput`<sup>Optional</sup> <a name="winrmPassCredentialsInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput"></a>

```typescript
public readonly winrmPassCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `winrmPasswordInput`<sup>Optional</sup> <a name="winrmPasswordInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput"></a>

```typescript
public readonly winrmPasswordInput: string;
```

- *Type:* string

---

##### `winrmPortInput`<sup>Optional</sup> <a name="winrmPortInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput"></a>

```typescript
public readonly winrmPortInput: number;
```

- *Type:* number

---

##### `winrmProtoInput`<sup>Optional</sup> <a name="winrmProtoInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput"></a>

```typescript
public readonly winrmProtoInput: string;
```

- *Type:* string

---

##### `winrmUseNtlmInput`<sup>Optional</sup> <a name="winrmUseNtlmInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput"></a>

```typescript
public readonly winrmUseNtlmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `winrmUsernameInput`<sup>Optional</sup> <a name="winrmUsernameInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput"></a>

```typescript
public readonly winrmUsernameInput: string;
```

- *Type:* string

---

##### `domainController`<sup>Optional</sup> <a name="domainController" id="@cdktf/provider-ad.provider.AdProvider.property.domainController"></a>

```typescript
public readonly domainController: string;
```

- *Type:* string

---

##### `krbConf`<sup>Optional</sup> <a name="krbConf" id="@cdktf/provider-ad.provider.AdProvider.property.krbConf"></a>

```typescript
public readonly krbConf: string;
```

- *Type:* string

---

##### `krbKeytab`<sup>Optional</sup> <a name="krbKeytab" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytab"></a>

```typescript
public readonly krbKeytab: string;
```

- *Type:* string

---

##### `krbRealm`<sup>Optional</sup> <a name="krbRealm" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealm"></a>

```typescript
public readonly krbRealm: string;
```

- *Type:* string

---

##### `krbSpn`<sup>Optional</sup> <a name="krbSpn" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpn"></a>

```typescript
public readonly krbSpn: string;
```

- *Type:* string

---

##### `winrmHostname`<sup>Optional</sup> <a name="winrmHostname" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostname"></a>

```typescript
public readonly winrmHostname: string;
```

- *Type:* string

---

##### `winrmInsecure`<sup>Optional</sup> <a name="winrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure"></a>

```typescript
public readonly winrmInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `winrmPassCredentials`<sup>Optional</sup> <a name="winrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials"></a>

```typescript
public readonly winrmPassCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `winrmPassword`<sup>Optional</sup> <a name="winrmPassword" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassword"></a>

```typescript
public readonly winrmPassword: string;
```

- *Type:* string

---

##### `winrmPort`<sup>Optional</sup> <a name="winrmPort" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPort"></a>

```typescript
public readonly winrmPort: number;
```

- *Type:* number

---

##### `winrmProto`<sup>Optional</sup> <a name="winrmProto" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProto"></a>

```typescript
public readonly winrmProto: string;
```

- *Type:* string

---

##### `winrmUseNtlm`<sup>Optional</sup> <a name="winrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm"></a>

```typescript
public readonly winrmUseNtlm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `winrmUsername`<sup>Optional</sup> <a name="winrmUsername" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsername"></a>

```typescript
public readonly winrmUsername: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Computer <a name="Computer" id="@cdktf/provider-ad.computer.Computer"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/r/computer ad_computer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.computer.Computer.Initializer"></a>

```typescript
import { computer } from '@cdktf/provider-ad'

new computer.Computer(scope: Construct, id: string, config: ComputerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.computer.Computer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.computer.Computer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.computer.Computer.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.computer.ComputerConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.computer.Computer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.computer.Computer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.computer.Computer.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.computer.ComputerConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.computer.Computer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.computer.Computer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.computer.Computer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.computer.Computer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.resetPre2Kname">resetPre2Kname</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.computer.Computer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.computer.Computer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.computer.Computer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.computer.Computer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.computer.Computer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.computer.Computer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.computer.Computer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.computer.Computer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.computer.Computer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.computer.Computer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.computer.Computer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.computer.Computer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.computer.Computer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.computer.Computer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.computer.Computer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.computer.Computer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.computer.Computer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.computer.Computer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.computer.Computer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.computer.Computer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-ad.computer.Computer.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ad.computer.Computer.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.computer.Computer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPre2Kname` <a name="resetPre2Kname" id="@cdktf/provider-ad.computer.Computer.resetPre2Kname"></a>

```typescript
public resetPre2Kname(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.computer.Computer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.computer.Computer.isConstruct"></a>

```typescript
import { computer } from '@cdktf/provider-ad'

computer.Computer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.computer.Computer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.pre2KnameInput">pre2KnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.pre2Kname">pre2Kname</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.computer.Computer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.computer.Computer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.computer.Computer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.computer.Computer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.computer.Computer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.computer.Computer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.computer.Computer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.computer.Computer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.computer.Computer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.computer.Computer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.computer.Computer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.computer.Computer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.computer.Computer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.computer.Computer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.computer.Computer.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-ad.computer.Computer.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.computer.Computer.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-ad.computer.Computer.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ad.computer.Computer.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.computer.Computer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ad.computer.Computer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pre2KnameInput`<sup>Optional</sup> <a name="pre2KnameInput" id="@cdktf/provider-ad.computer.Computer.property.pre2KnameInput"></a>

```typescript
public readonly pre2KnameInput: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-ad.computer.Computer.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.computer.Computer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.computer.Computer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.computer.Computer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pre2Kname`<sup>Required</sup> <a name="pre2Kname" id="@cdktf/provider-ad.computer.Computer.property.pre2Kname"></a>

```typescript
public readonly pre2Kname: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.computer.Computer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.computer.Computer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataAdComputer <a name="DataAdComputer" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/d/computer ad_computer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer"></a>

```typescript
import { dataAdComputer } from '@cdktf/provider-ad'

new dataAdComputer.DataAdComputer(scope: Construct, id: string, config?: DataAdComputerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.dataAdComputer.DataAdComputerConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetComputerId">resetComputerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetDn">resetDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetGuid">resetGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetComputerId` <a name="resetComputerId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetComputerId"></a>

```typescript
public resetComputerId(): void
```

##### `resetDn` <a name="resetDn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetDn"></a>

```typescript
public resetDn(): void
```

##### `resetGuid` <a name="resetGuid" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetGuid"></a>

```typescript
public resetGuid(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.isConstruct"></a>

```typescript
import { dataAdComputer } from '@cdktf/provider-ad'

dataAdComputer.DataAdComputer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.computerIdInput">computerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dnInput">dnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.guidInput">guidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.computerId">computerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `computerIdInput`<sup>Optional</sup> <a name="computerIdInput" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.computerIdInput"></a>

```typescript
public readonly computerIdInput: string;
```

- *Type:* string

---

##### `dnInput`<sup>Optional</sup> <a name="dnInput" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dnInput"></a>

```typescript
public readonly dnInput: string;
```

- *Type:* string

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `computerId`<sup>Required</sup> <a name="computerId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.computerId"></a>

```typescript
public readonly computerId: string;
```

- *Type:* string

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataAdGpo <a name="DataAdGpo" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/d/gpo ad_gpo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.Initializer"></a>

```typescript
import { dataAdGpo } from '@cdktf/provider-ad'

new dataAdGpo.DataAdGpo(scope: Construct, id: string, config?: DataAdGpoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.dataAdGpo.DataAdGpoConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.resetGuid">resetGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetGuid` <a name="resetGuid" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.resetGuid"></a>

```typescript
public resetGuid(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.isConstruct"></a>

```typescript
import { dataAdGpo } from '@cdktf/provider-ad'

dataAdGpo.DataAdGpo.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.guidInput">guidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.dataAdGpo.DataAdGpo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataAdGroup <a name="DataAdGroup" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/d/group ad_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.Initializer"></a>

```typescript
import { dataAdGroup } from '@cdktf/provider-ad'

new dataAdGroup.DataAdGroup(scope: Construct, id: string, config: DataAdGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.dataAdGroup.DataAdGroupConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.isConstruct"></a>

```typescript
import { dataAdGroup } from '@cdktf/provider-ad'

dataAdGroup.DataAdGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.samAccountName">samAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.dataAdGroup.DataAdGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataAdOu <a name="DataAdOu" id="@cdktf/provider-ad.dataAdOu.DataAdOu"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/d/ou ad_ou}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer"></a>

```typescript
import { dataAdOu } from '@cdktf/provider-ad'

new dataAdOu.DataAdOu(scope: Construct, id: string, config?: DataAdOuConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.dataAdOu.DataAdOuConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.dataAdOu.DataAdOuConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetDn">resetDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetOuId">resetOuId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetPath">resetPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDn` <a name="resetDn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetDn"></a>

```typescript
public resetDn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOuId` <a name="resetOuId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetOuId"></a>

```typescript
public resetOuId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetPath"></a>

```typescript
public resetPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isConstruct"></a>

```typescript
import { dataAdOu } from '@cdktf/provider-ad'

dataAdOu.DataAdOu.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.protected">protected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dnInput">dnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouIdInput">ouIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouId">ouId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.protected"></a>

```typescript
public readonly protected: string;
```

- *Type:* string

---

##### `dnInput`<sup>Optional</sup> <a name="dnInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dnInput"></a>

```typescript
public readonly dnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ouIdInput`<sup>Optional</sup> <a name="ouIdInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouIdInput"></a>

```typescript
public readonly ouIdInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ouId`<sup>Required</sup> <a name="ouId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouId"></a>

```typescript
public readonly ouId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataAdUser <a name="DataAdUser" id="@cdktf/provider-ad.dataAdUser.DataAdUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/d/user ad_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer"></a>

```typescript
import { dataAdUser } from '@cdktf/provider-ad'

new dataAdUser.DataAdUser(scope: Construct, id: string, config: DataAdUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.dataAdUser.DataAdUserConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.dataAdUser.DataAdUserConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isConstruct"></a>

```typescript
import { dataAdUser } from '@cdktf/provider-ad'

dataAdUser.DataAdUser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.company">company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.division">division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeId">employeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeNumber">employeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDrive">homeDrive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePage">homePage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePhone">homePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.office">office</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.officePhone">officePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.otherName">otherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.poBox">poBox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.principalName">principalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.samAccountName">samAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.smartCardLogonRequired">smartCardLogonRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.trustedForDelegation">trustedForDelegation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeNumber"></a>

```typescript
public readonly employeeNumber: string;
```

- *Type:* string

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

---

##### `homeDrive`<sup>Required</sup> <a name="homeDrive" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDrive"></a>

```typescript
public readonly homeDrive: string;
```

- *Type:* string

---

##### `homePage`<sup>Required</sup> <a name="homePage" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePage"></a>

```typescript
public readonly homePage: string;
```

- *Type:* string

---

##### `homePhone`<sup>Required</sup> <a name="homePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePhone"></a>

```typescript
public readonly homePhone: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

---

##### `office`<sup>Required</sup> <a name="office" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.office"></a>

```typescript
public readonly office: string;
```

- *Type:* string

---

##### `officePhone`<sup>Required</sup> <a name="officePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.officePhone"></a>

```typescript
public readonly officePhone: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `otherName`<sup>Required</sup> <a name="otherName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.otherName"></a>

```typescript
public readonly otherName: string;
```

- *Type:* string

---

##### `poBox`<sup>Required</sup> <a name="poBox" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.poBox"></a>

```typescript
public readonly poBox: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.principalName"></a>

```typescript
public readonly principalName: string;
```

- *Type:* string

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `smartCardLogonRequired`<sup>Required</sup> <a name="smartCardLogonRequired" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.smartCardLogonRequired"></a>

```typescript
public readonly smartCardLogonRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `trustedForDelegation`<sup>Required</sup> <a name="trustedForDelegation" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.trustedForDelegation"></a>

```typescript
public readonly trustedForDelegation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Gplink <a name="Gplink" id="@cdktf/provider-ad.gplink.Gplink"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/r/gplink ad_gplink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gplink.Gplink.Initializer"></a>

```typescript
import { gplink } from '@cdktf/provider-ad'

new gplink.Gplink(scope: Construct, id: string, config: GplinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.gplink.GplinkConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.gplink.Gplink.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.gplink.GplinkConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetEnforced">resetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gplink.Gplink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.gplink.Gplink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gplink.Gplink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gplink.Gplink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.gplink.Gplink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.gplink.Gplink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.gplink.Gplink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.gplink.Gplink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.gplink.Gplink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gplink.Gplink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gplink.Gplink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gplink.Gplink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gplink.Gplink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gplink.Gplink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gplink.Gplink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gplink.Gplink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gplink.Gplink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-ad.gplink.Gplink.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEnforced` <a name="resetEnforced" id="@cdktf/provider-ad.gplink.Gplink.resetEnforced"></a>

```typescript
public resetEnforced(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.gplink.Gplink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-ad.gplink.Gplink.resetOrder"></a>

```typescript
public resetOrder(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.gplink.Gplink.isConstruct"></a>

```typescript
import { gplink } from '@cdktf/provider-ad'

gplink.Gplink.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gplink.Gplink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.enforcedInput">enforcedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.gpoGuidInput">gpoGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.targetDnInput">targetDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.enforced">enforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.gpoGuid">gpoGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.targetDn">targetDn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.gplink.Gplink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.gplink.Gplink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gplink.Gplink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.gplink.Gplink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.gplink.Gplink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.gplink.Gplink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.gplink.Gplink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gplink.Gplink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gplink.Gplink.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gplink.Gplink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gplink.Gplink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gplink.Gplink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gplink.Gplink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gplink.Gplink.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-ad.gplink.Gplink.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktf/provider-ad.gplink.Gplink.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gpoGuidInput`<sup>Optional</sup> <a name="gpoGuidInput" id="@cdktf/provider-ad.gplink.Gplink.property.gpoGuidInput"></a>

```typescript
public readonly gpoGuidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.gplink.Gplink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-ad.gplink.Gplink.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `targetDnInput`<sup>Optional</sup> <a name="targetDnInput" id="@cdktf/provider-ad.gplink.Gplink.property.targetDnInput"></a>

```typescript
public readonly targetDnInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ad.gplink.Gplink.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-ad.gplink.Gplink.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gpoGuid`<sup>Required</sup> <a name="gpoGuid" id="@cdktf/provider-ad.gplink.Gplink.property.gpoGuid"></a>

```typescript
public readonly gpoGuid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gplink.Gplink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-ad.gplink.Gplink.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `targetDn`<sup>Required</sup> <a name="targetDn" id="@cdktf/provider-ad.gplink.Gplink.property.targetDn"></a>

```typescript
public readonly targetDn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.Gplink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.gplink.Gplink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Gpo <a name="Gpo" id="@cdktf/provider-ad.gpo.Gpo"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/r/gpo ad_gpo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpo.Gpo.Initializer"></a>

```typescript
import { gpo } from '@cdktf/provider-ad'

new gpo.Gpo(scope: Construct, id: string, config: GpoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.gpo.GpoConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gpo.Gpo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpo.Gpo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.gpo.Gpo.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.gpo.GpoConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpo.Gpo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.gpo.Gpo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpo.Gpo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpo.Gpo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.gpo.Gpo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.gpo.Gpo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.gpo.Gpo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.gpo.Gpo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.gpo.Gpo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpo.Gpo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpo.Gpo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpo.Gpo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpo.Gpo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpo.Gpo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpo.Gpo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpo.Gpo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpo.Gpo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpo.Gpo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpo.Gpo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpo.Gpo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ad.gpo.Gpo.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-ad.gpo.Gpo.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.gpo.Gpo.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-ad.gpo.Gpo.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.gpo.Gpo.isConstruct"></a>

```typescript
import { gpo } from '@cdktf/provider-ad'

gpo.Gpo.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpo.Gpo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.numericStatus">numericStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.gpo.Gpo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.gpo.Gpo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpo.Gpo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.gpo.Gpo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.gpo.Gpo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.gpo.Gpo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.gpo.Gpo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpo.Gpo.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpo.Gpo.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpo.Gpo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpo.Gpo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpo.Gpo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpo.Gpo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpo.Gpo.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.gpo.Gpo.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `numericStatus`<sup>Required</sup> <a name="numericStatus" id="@cdktf/provider-ad.gpo.Gpo.property.numericStatus"></a>

```typescript
public readonly numericStatus: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ad.gpo.Gpo.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-ad.gpo.Gpo.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.gpo.Gpo.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ad.gpo.Gpo.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-ad.gpo.Gpo.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.gpo.Gpo.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ad.gpo.Gpo.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpo.Gpo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.gpo.Gpo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ad.gpo.Gpo.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpo.Gpo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.gpo.Gpo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### GpoSecurity <a name="GpoSecurity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/r/gpo_security ad_gpo_security}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurity(scope: Construct, id: string, config: GpoSecurityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout">putAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog">putApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog">putAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit">putEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem">putFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy">putKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies">putPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys">putRegistryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues">putRegistryValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups">putRestrictedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog">putSystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices">putSystemServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout">resetAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog">resetApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog">resetAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit">resetEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem">resetFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy">resetKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies">resetPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys">resetRegistryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues">resetRegistryValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups">resetRestrictedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog">resetSystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices">resetSystemServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccountLockout` <a name="putAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout"></a>

```typescript
public putAccountLockout(value: GpoSecurityAccountLockout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout.parameter.value"></a>

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout

---

##### `putApplicationLog` <a name="putApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog"></a>

```typescript
public putApplicationLog(value: GpoSecurityApplicationLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog.parameter.value"></a>

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog

---

##### `putAuditLog` <a name="putAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog"></a>

```typescript
public putAuditLog(value: GpoSecurityAuditLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog.parameter.value"></a>

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog

---

##### `putEventAudit` <a name="putEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit"></a>

```typescript
public putEventAudit(value: GpoSecurityEventAudit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit.parameter.value"></a>

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit

---

##### `putFilesystem` <a name="putFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem"></a>

```typescript
public putFilesystem(value: IResolvable | GpoSecurityFilesystem[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem[]

---

##### `putKerberosPolicy` <a name="putKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy"></a>

```typescript
public putKerberosPolicy(value: GpoSecurityKerberosPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy.parameter.value"></a>

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy

---

##### `putPasswordPolicies` <a name="putPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies"></a>

```typescript
public putPasswordPolicies(value: GpoSecurityPasswordPolicies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies.parameter.value"></a>

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies

---

##### `putRegistryKeys` <a name="putRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys"></a>

```typescript
public putRegistryKeys(value: IResolvable | GpoSecurityRegistryKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys[]

---

##### `putRegistryValues` <a name="putRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues"></a>

```typescript
public putRegistryValues(value: IResolvable | GpoSecurityRegistryValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues[]

---

##### `putRestrictedGroups` <a name="putRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups"></a>

```typescript
public putRestrictedGroups(value: IResolvable | GpoSecurityRestrictedGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups[]

---

##### `putSystemLog` <a name="putSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog"></a>

```typescript
public putSystemLog(value: GpoSecuritySystemLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog.parameter.value"></a>

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog

---

##### `putSystemServices` <a name="putSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices"></a>

```typescript
public putSystemServices(value: IResolvable | GpoSecuritySystemServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices[]

---

##### `resetAccountLockout` <a name="resetAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout"></a>

```typescript
public resetAccountLockout(): void
```

##### `resetApplicationLog` <a name="resetApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog"></a>

```typescript
public resetApplicationLog(): void
```

##### `resetAuditLog` <a name="resetAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog"></a>

```typescript
public resetAuditLog(): void
```

##### `resetEventAudit` <a name="resetEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit"></a>

```typescript
public resetEventAudit(): void
```

##### `resetFilesystem` <a name="resetFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem"></a>

```typescript
public resetFilesystem(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKerberosPolicy` <a name="resetKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy"></a>

```typescript
public resetKerberosPolicy(): void
```

##### `resetPasswordPolicies` <a name="resetPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies"></a>

```typescript
public resetPasswordPolicies(): void
```

##### `resetRegistryKeys` <a name="resetRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys"></a>

```typescript
public resetRegistryKeys(): void
```

##### `resetRegistryValues` <a name="resetRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues"></a>

```typescript
public resetRegistryValues(): void
```

##### `resetRestrictedGroups` <a name="resetRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups"></a>

```typescript
public resetRestrictedGroups(): void
```

##### `resetSystemLog` <a name="resetSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog"></a>

```typescript
public resetSystemLog(): void
```

##### `resetSystemServices` <a name="resetSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices"></a>

```typescript
public resetSystemServices(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

gpoSecurity.GpoSecurity.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout">accountLockout</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog">applicationLog</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog">auditLog</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit">eventAudit</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem">filesystem</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy">kerberosPolicy</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies">passwordPolicies</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys">registryKeys</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues">registryValues</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups">restrictedGroups</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog">systemLog</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices">systemServices</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput">accountLockoutInput</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput">applicationLogInput</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput">auditLogInput</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput">eventAuditInput</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput">filesystemInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput">gpoContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput">kerberosPolicyInput</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput">passwordPoliciesInput</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput">registryKeysInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput">registryValuesInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput">restrictedGroupsInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput">systemLogInput</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput">systemServicesInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer">gpoContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountLockout`<sup>Required</sup> <a name="accountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout"></a>

```typescript
public readonly accountLockout: GpoSecurityAccountLockoutOutputReference;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference

---

##### `applicationLog`<sup>Required</sup> <a name="applicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog"></a>

```typescript
public readonly applicationLog: GpoSecurityApplicationLogOutputReference;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog"></a>

```typescript
public readonly auditLog: GpoSecurityAuditLogOutputReference;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference

---

##### `eventAudit`<sup>Required</sup> <a name="eventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit"></a>

```typescript
public readonly eventAudit: GpoSecurityEventAuditOutputReference;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem"></a>

```typescript
public readonly filesystem: GpoSecurityFilesystemList;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList

---

##### `kerberosPolicy`<sup>Required</sup> <a name="kerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy"></a>

```typescript
public readonly kerberosPolicy: GpoSecurityKerberosPolicyOutputReference;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference

---

##### `passwordPolicies`<sup>Required</sup> <a name="passwordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies"></a>

```typescript
public readonly passwordPolicies: GpoSecurityPasswordPoliciesOutputReference;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference

---

##### `registryKeys`<sup>Required</sup> <a name="registryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys"></a>

```typescript
public readonly registryKeys: GpoSecurityRegistryKeysList;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList

---

##### `registryValues`<sup>Required</sup> <a name="registryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues"></a>

```typescript
public readonly registryValues: GpoSecurityRegistryValuesList;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList

---

##### `restrictedGroups`<sup>Required</sup> <a name="restrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups"></a>

```typescript
public readonly restrictedGroups: GpoSecurityRestrictedGroupsList;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList

---

##### `systemLog`<sup>Required</sup> <a name="systemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog"></a>

```typescript
public readonly systemLog: GpoSecuritySystemLogOutputReference;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference

---

##### `systemServices`<sup>Required</sup> <a name="systemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices"></a>

```typescript
public readonly systemServices: GpoSecuritySystemServicesList;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList

---

##### `accountLockoutInput`<sup>Optional</sup> <a name="accountLockoutInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput"></a>

```typescript
public readonly accountLockoutInput: GpoSecurityAccountLockout;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout

---

##### `applicationLogInput`<sup>Optional</sup> <a name="applicationLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput"></a>

```typescript
public readonly applicationLogInput: GpoSecurityApplicationLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput"></a>

```typescript
public readonly auditLogInput: GpoSecurityAuditLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog

---

##### `eventAuditInput`<sup>Optional</sup> <a name="eventAuditInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput"></a>

```typescript
public readonly eventAuditInput: GpoSecurityEventAudit;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit

---

##### `filesystemInput`<sup>Optional</sup> <a name="filesystemInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput"></a>

```typescript
public readonly filesystemInput: IResolvable | GpoSecurityFilesystem[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem[]

---

##### `gpoContainerInput`<sup>Optional</sup> <a name="gpoContainerInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput"></a>

```typescript
public readonly gpoContainerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kerberosPolicyInput`<sup>Optional</sup> <a name="kerberosPolicyInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput"></a>

```typescript
public readonly kerberosPolicyInput: GpoSecurityKerberosPolicy;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy

---

##### `passwordPoliciesInput`<sup>Optional</sup> <a name="passwordPoliciesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput"></a>

```typescript
public readonly passwordPoliciesInput: GpoSecurityPasswordPolicies;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies

---

##### `registryKeysInput`<sup>Optional</sup> <a name="registryKeysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput"></a>

```typescript
public readonly registryKeysInput: IResolvable | GpoSecurityRegistryKeys[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys[]

---

##### `registryValuesInput`<sup>Optional</sup> <a name="registryValuesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput"></a>

```typescript
public readonly registryValuesInput: IResolvable | GpoSecurityRegistryValues[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues[]

---

##### `restrictedGroupsInput`<sup>Optional</sup> <a name="restrictedGroupsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput"></a>

```typescript
public readonly restrictedGroupsInput: IResolvable | GpoSecurityRestrictedGroups[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups[]

---

##### `systemLogInput`<sup>Optional</sup> <a name="systemLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput"></a>

```typescript
public readonly systemLogInput: GpoSecuritySystemLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog

---

##### `systemServicesInput`<sup>Optional</sup> <a name="systemServicesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput"></a>

```typescript
public readonly systemServicesInput: IResolvable | GpoSecuritySystemServices[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices[]

---

##### `gpoContainer`<sup>Required</sup> <a name="gpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer"></a>

```typescript
public readonly gpoContainer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Group <a name="Group" id="@cdktf/provider-ad.group.Group"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/r/group ad_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.group.Group.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-ad'

new group.Group(scope: Construct, id: string, config: GroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.group.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.group.Group.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.group.Group.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.group.GroupConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.group.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.group.Group.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.group.Group.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.group.GroupConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.group.Group.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.group.Group.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.group.Group.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.group.Group.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.group.Group.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.group.Group.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.group.Group.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.group.Group.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.group.Group.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.group.Group.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.group.Group.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.group.Group.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.group.Group.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.group.Group.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.group.Group.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.group.Group.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.group.Group.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.group.Group.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.group.Group.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.group.Group.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.group.Group.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.group.Group.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.group.Group.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-ad.group.Group.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ad.group.Group.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.group.Group.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-ad.group.Group.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.group.Group.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.group.Group.isConstruct"></a>

```typescript
import { group } from '@cdktf/provider-ad'

group.Group.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.group.Group.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.group.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.group.Group.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.samAccountNameInput">samAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.samAccountName">samAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.Group.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.group.Group.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.group.Group.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.group.Group.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.group.Group.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.group.Group.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.group.Group.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.group.Group.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.group.Group.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.group.Group.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.group.Group.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.group.Group.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.group.Group.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.group.Group.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.group.Group.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.group.Group.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.group.Group.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-ad.group.Group.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-ad.group.Group.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ad.group.Group.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.group.Group.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ad.group.Group.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `samAccountNameInput`<sup>Optional</sup> <a name="samAccountNameInput" id="@cdktf/provider-ad.group.Group.property.samAccountNameInput"></a>

```typescript
public readonly samAccountNameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-ad.group.Group.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-ad.group.Group.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-ad.group.Group.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.group.Group.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.group.Group.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.group.Group.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.group.Group.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.group.Group.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.group.Group.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### GroupMembership <a name="GroupMembership" id="@cdktf/provider-ad.groupMembership.GroupMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/r/group_membership ad_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.groupMembership.GroupMembership.Initializer"></a>

```typescript
import { groupMembership } from '@cdktf/provider-ad'

new groupMembership.GroupMembership(scope: Construct, id: string, config: GroupMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.groupMembership.GroupMembershipConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.groupMembership.GroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.groupMembership.GroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.groupMembership.GroupMembership.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.groupMembership.GroupMembershipConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.groupMembership.GroupMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.groupMembership.GroupMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.groupMembership.GroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.groupMembership.GroupMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.groupMembership.GroupMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.groupMembership.GroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.groupMembership.GroupMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.groupMembership.GroupMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.groupMembership.GroupMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.groupMembership.GroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.groupMembership.GroupMembership.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.groupMembership.GroupMembership.isConstruct"></a>

```typescript
import { groupMembership } from '@cdktf/provider-ad'

groupMembership.GroupMembership.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.groupMembership.GroupMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.groupMembersInput">groupMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.groupMembers">groupMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `groupMembersInput`<sup>Optional</sup> <a name="groupMembersInput" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.groupMembersInput"></a>

```typescript
public readonly groupMembersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupMembers`<sup>Required</sup> <a name="groupMembers" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.groupMembers"></a>

```typescript
public readonly groupMembers: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.groupMembership.GroupMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Ou <a name="Ou" id="@cdktf/provider-ad.ou.Ou"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/r/ou ad_ou}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.ou.Ou.Initializer"></a>

```typescript
import { ou } from '@cdktf/provider-ad'

new ou.Ou(scope: Construct, id: string, config: OuConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.ou.Ou.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.ou.Ou.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.ou.Ou.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.ou.OuConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.ou.Ou.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.ou.Ou.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.ou.Ou.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.ou.OuConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.ou.Ou.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.ou.Ou.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.ou.Ou.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.ou.Ou.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.resetProtected">resetProtected</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.ou.Ou.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.ou.Ou.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.ou.Ou.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.ou.Ou.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.ou.Ou.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.ou.Ou.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.ou.Ou.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.ou.Ou.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.ou.Ou.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.ou.Ou.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.ou.Ou.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.ou.Ou.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.ou.Ou.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.ou.Ou.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.ou.Ou.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.ou.Ou.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.ou.Ou.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.ou.Ou.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.ou.Ou.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.ou.Ou.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ad.ou.Ou.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.ou.Ou.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-ad.ou.Ou.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetProtected` <a name="resetProtected" id="@cdktf/provider-ad.ou.Ou.resetProtected"></a>

```typescript
public resetProtected(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.ou.Ou.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.ou.Ou.isConstruct"></a>

```typescript
import { ou } from '@cdktf/provider-ad'

ou.Ou.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.ou.Ou.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.protectedInput">protectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.ou.Ou.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.ou.Ou.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.ou.Ou.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.ou.Ou.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.ou.Ou.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.ou.Ou.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.ou.Ou.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.ou.Ou.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.ou.Ou.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.ou.Ou.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.ou.Ou.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.ou.Ou.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.ou.Ou.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.ou.Ou.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.ou.Ou.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-ad.ou.Ou.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ad.ou.Ou.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.ou.Ou.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ad.ou.Ou.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-ad.ou.Ou.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `protectedInput`<sup>Optional</sup> <a name="protectedInput" id="@cdktf/provider-ad.ou.Ou.property.protectedInput"></a>

```typescript
public readonly protectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.ou.Ou.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.ou.Ou.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.ou.Ou.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.ou.Ou.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-ad.ou.Ou.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.ou.Ou.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.ou.Ou.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### User <a name="User" id="@cdktf/provider-ad.user.User"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad/r/user ad_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-ad'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-ad.user.UserConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.user.User.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-ad.user.UserConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCannotChangePassword">resetCannotChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCompany">resetCompany</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDivision">resetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmployeeId">resetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmployeeNumber">resetEmployeeNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomeDirectory">resetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomeDrive">resetHomeDrive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomePage">resetHomePage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomePhone">resetHomePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetInitialPassword">resetInitialPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetMobilePhone">resetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOffice">resetOffice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOfficePhone">resetOfficePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOtherName">resetOtherName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPasswordNeverExpires">resetPasswordNeverExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPoBox">resetPoBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetSmartCardLogonRequired">resetSmartCardLogonRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetTrustedForDelegation">resetTrustedForDelegation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.user.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCannotChangePassword` <a name="resetCannotChangePassword" id="@cdktf/provider-ad.user.User.resetCannotChangePassword"></a>

```typescript
public resetCannotChangePassword(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-ad.user.User.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCompany` <a name="resetCompany" id="@cdktf/provider-ad.user.User.resetCompany"></a>

```typescript
public resetCompany(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-ad.user.User.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-ad.user.User.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-ad.user.User.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktf/provider-ad.user.User.resetDepartment"></a>

```typescript
public resetDepartment(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ad.user.User.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDivision` <a name="resetDivision" id="@cdktf/provider-ad.user.User.resetDivision"></a>

```typescript
public resetDivision(): void
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-ad.user.User.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetEmployeeId` <a name="resetEmployeeId" id="@cdktf/provider-ad.user.User.resetEmployeeId"></a>

```typescript
public resetEmployeeId(): void
```

##### `resetEmployeeNumber` <a name="resetEmployeeNumber" id="@cdktf/provider-ad.user.User.resetEmployeeNumber"></a>

```typescript
public resetEmployeeNumber(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-ad.user.User.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-ad.user.User.resetFax"></a>

```typescript
public resetFax(): void
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktf/provider-ad.user.User.resetGivenName"></a>

```typescript
public resetGivenName(): void
```

##### `resetHomeDirectory` <a name="resetHomeDirectory" id="@cdktf/provider-ad.user.User.resetHomeDirectory"></a>

```typescript
public resetHomeDirectory(): void
```

##### `resetHomeDrive` <a name="resetHomeDrive" id="@cdktf/provider-ad.user.User.resetHomeDrive"></a>

```typescript
public resetHomeDrive(): void
```

##### `resetHomePage` <a name="resetHomePage" id="@cdktf/provider-ad.user.User.resetHomePage"></a>

```typescript
public resetHomePage(): void
```

##### `resetHomePhone` <a name="resetHomePhone" id="@cdktf/provider-ad.user.User.resetHomePhone"></a>

```typescript
public resetHomePhone(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.user.User.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialPassword` <a name="resetInitialPassword" id="@cdktf/provider-ad.user.User.resetInitialPassword"></a>

```typescript
public resetInitialPassword(): void
```

##### `resetInitials` <a name="resetInitials" id="@cdktf/provider-ad.user.User.resetInitials"></a>

```typescript
public resetInitials(): void
```

##### `resetMobilePhone` <a name="resetMobilePhone" id="@cdktf/provider-ad.user.User.resetMobilePhone"></a>

```typescript
public resetMobilePhone(): void
```

##### `resetOffice` <a name="resetOffice" id="@cdktf/provider-ad.user.User.resetOffice"></a>

```typescript
public resetOffice(): void
```

##### `resetOfficePhone` <a name="resetOfficePhone" id="@cdktf/provider-ad.user.User.resetOfficePhone"></a>

```typescript
public resetOfficePhone(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-ad.user.User.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOtherName` <a name="resetOtherName" id="@cdktf/provider-ad.user.User.resetOtherName"></a>

```typescript
public resetOtherName(): void
```

##### `resetPasswordNeverExpires` <a name="resetPasswordNeverExpires" id="@cdktf/provider-ad.user.User.resetPasswordNeverExpires"></a>

```typescript
public resetPasswordNeverExpires(): void
```

##### `resetPoBox` <a name="resetPoBox" id="@cdktf/provider-ad.user.User.resetPoBox"></a>

```typescript
public resetPoBox(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-ad.user.User.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetSmartCardLogonRequired` <a name="resetSmartCardLogonRequired" id="@cdktf/provider-ad.user.User.resetSmartCardLogonRequired"></a>

```typescript
public resetSmartCardLogonRequired(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-ad.user.User.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-ad.user.User.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetSurname` <a name="resetSurname" id="@cdktf/provider-ad.user.User.resetSurname"></a>

```typescript
public resetSurname(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-ad.user.User.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetTrustedForDelegation` <a name="resetTrustedForDelegation" id="@cdktf/provider-ad.user.User.resetTrustedForDelegation"></a>

```typescript
public resetTrustedForDelegation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktf/provider-ad'

user.User.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePasswordInput">cannotChangePasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.companyInput">companyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributesInput">customAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.departmentInput">departmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.divisionInput">divisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeIdInput">employeeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumberInput">employeeNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.faxInput">faxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectoryInput">homeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDriveInput">homeDriveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePageInput">homePageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhoneInput">homePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPasswordInput">initialPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialsInput">initialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhoneInput">mobilePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officeInput">officeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhoneInput">officePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherNameInput">otherNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput">passwordNeverExpiresInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBoxInput">poBoxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalNameInput">principalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountNameInput">samAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput">smartCardLogonRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surnameInput">surnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegationInput">trustedForDelegationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePassword">cannotChangePassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.company">company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributes">customAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.division">division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeId">employeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumber">employeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDrive">homeDrive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePage">homePage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhone">homePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPassword">initialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.office">office</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhone">officePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherName">otherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpires">passwordNeverExpires</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBox">poBox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalName">principalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountName">samAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequired">smartCardLogonRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegation">trustedForDelegation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.user.User.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.user.User.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.user.User.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `cannotChangePasswordInput`<sup>Optional</sup> <a name="cannotChangePasswordInput" id="@cdktf/provider-ad.user.User.property.cannotChangePasswordInput"></a>

```typescript
public readonly cannotChangePasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-ad.user.User.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `companyInput`<sup>Optional</sup> <a name="companyInput" id="@cdktf/provider-ad.user.User.property.companyInput"></a>

```typescript
public readonly companyInput: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-ad.user.User.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-ad.user.User.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-ad.user.User.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: string;
```

- *Type:* string

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktf/provider-ad.user.User.property.departmentInput"></a>

```typescript
public readonly departmentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ad.user.User.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-ad.user.User.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `divisionInput`<sup>Optional</sup> <a name="divisionInput" id="@cdktf/provider-ad.user.User.property.divisionInput"></a>

```typescript
public readonly divisionInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-ad.user.User.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `employeeIdInput`<sup>Optional</sup> <a name="employeeIdInput" id="@cdktf/provider-ad.user.User.property.employeeIdInput"></a>

```typescript
public readonly employeeIdInput: string;
```

- *Type:* string

---

##### `employeeNumberInput`<sup>Optional</sup> <a name="employeeNumberInput" id="@cdktf/provider-ad.user.User.property.employeeNumberInput"></a>

```typescript
public readonly employeeNumberInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-ad.user.User.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-ad.user.User.property.faxInput"></a>

```typescript
public readonly faxInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-ad.user.User.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `homeDirectoryInput`<sup>Optional</sup> <a name="homeDirectoryInput" id="@cdktf/provider-ad.user.User.property.homeDirectoryInput"></a>

```typescript
public readonly homeDirectoryInput: string;
```

- *Type:* string

---

##### `homeDriveInput`<sup>Optional</sup> <a name="homeDriveInput" id="@cdktf/provider-ad.user.User.property.homeDriveInput"></a>

```typescript
public readonly homeDriveInput: string;
```

- *Type:* string

---

##### `homePageInput`<sup>Optional</sup> <a name="homePageInput" id="@cdktf/provider-ad.user.User.property.homePageInput"></a>

```typescript
public readonly homePageInput: string;
```

- *Type:* string

---

##### `homePhoneInput`<sup>Optional</sup> <a name="homePhoneInput" id="@cdktf/provider-ad.user.User.property.homePhoneInput"></a>

```typescript
public readonly homePhoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.user.User.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialPasswordInput`<sup>Optional</sup> <a name="initialPasswordInput" id="@cdktf/provider-ad.user.User.property.initialPasswordInput"></a>

```typescript
public readonly initialPasswordInput: string;
```

- *Type:* string

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktf/provider-ad.user.User.property.initialsInput"></a>

```typescript
public readonly initialsInput: string;
```

- *Type:* string

---

##### `mobilePhoneInput`<sup>Optional</sup> <a name="mobilePhoneInput" id="@cdktf/provider-ad.user.User.property.mobilePhoneInput"></a>

```typescript
public readonly mobilePhoneInput: string;
```

- *Type:* string

---

##### `officeInput`<sup>Optional</sup> <a name="officeInput" id="@cdktf/provider-ad.user.User.property.officeInput"></a>

```typescript
public readonly officeInput: string;
```

- *Type:* string

---

##### `officePhoneInput`<sup>Optional</sup> <a name="officePhoneInput" id="@cdktf/provider-ad.user.User.property.officePhoneInput"></a>

```typescript
public readonly officePhoneInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-ad.user.User.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `otherNameInput`<sup>Optional</sup> <a name="otherNameInput" id="@cdktf/provider-ad.user.User.property.otherNameInput"></a>

```typescript
public readonly otherNameInput: string;
```

- *Type:* string

---

##### `passwordNeverExpiresInput`<sup>Optional</sup> <a name="passwordNeverExpiresInput" id="@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput"></a>

```typescript
public readonly passwordNeverExpiresInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `poBoxInput`<sup>Optional</sup> <a name="poBoxInput" id="@cdktf/provider-ad.user.User.property.poBoxInput"></a>

```typescript
public readonly poBoxInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-ad.user.User.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `principalNameInput`<sup>Optional</sup> <a name="principalNameInput" id="@cdktf/provider-ad.user.User.property.principalNameInput"></a>

```typescript
public readonly principalNameInput: string;
```

- *Type:* string

---

##### `samAccountNameInput`<sup>Optional</sup> <a name="samAccountNameInput" id="@cdktf/provider-ad.user.User.property.samAccountNameInput"></a>

```typescript
public readonly samAccountNameInput: string;
```

- *Type:* string

---

##### `smartCardLogonRequiredInput`<sup>Optional</sup> <a name="smartCardLogonRequiredInput" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput"></a>

```typescript
public readonly smartCardLogonRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-ad.user.User.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-ad.user.User.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktf/provider-ad.user.User.property.surnameInput"></a>

```typescript
public readonly surnameInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-ad.user.User.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `trustedForDelegationInput`<sup>Optional</sup> <a name="trustedForDelegationInput" id="@cdktf/provider-ad.user.User.property.trustedForDelegationInput"></a>

```typescript
public readonly trustedForDelegationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cannotChangePassword`<sup>Required</sup> <a name="cannotChangePassword" id="@cdktf/provider-ad.user.User.property.cannotChangePassword"></a>

```typescript
public readonly cannotChangePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-ad.user.User.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktf/provider-ad.user.User.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-ad.user.User.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-ad.user.User.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-ad.user.User.property.customAttributes"></a>

```typescript
public readonly customAttributes: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-ad.user.User.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.user.User.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ad.user.User.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-ad.user.User.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-ad.user.User.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktf/provider-ad.user.User.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-ad.user.User.property.employeeNumber"></a>

```typescript
public readonly employeeNumber: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ad.user.User.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-ad.user.User.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-ad.user.User.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/provider-ad.user.User.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

---

##### `homeDrive`<sup>Required</sup> <a name="homeDrive" id="@cdktf/provider-ad.user.User.property.homeDrive"></a>

```typescript
public readonly homeDrive: string;
```

- *Type:* string

---

##### `homePage`<sup>Required</sup> <a name="homePage" id="@cdktf/provider-ad.user.User.property.homePage"></a>

```typescript
public readonly homePage: string;
```

- *Type:* string

---

##### `homePhone`<sup>Required</sup> <a name="homePhone" id="@cdktf/provider-ad.user.User.property.homePhone"></a>

```typescript
public readonly homePhone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialPassword`<sup>Required</sup> <a name="initialPassword" id="@cdktf/provider-ad.user.User.property.initialPassword"></a>

```typescript
public readonly initialPassword: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktf/provider-ad.user.User.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-ad.user.User.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

---

##### `office`<sup>Required</sup> <a name="office" id="@cdktf/provider-ad.user.User.property.office"></a>

```typescript
public readonly office: string;
```

- *Type:* string

---

##### `officePhone`<sup>Required</sup> <a name="officePhone" id="@cdktf/provider-ad.user.User.property.officePhone"></a>

```typescript
public readonly officePhone: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-ad.user.User.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `otherName`<sup>Required</sup> <a name="otherName" id="@cdktf/provider-ad.user.User.property.otherName"></a>

```typescript
public readonly otherName: string;
```

- *Type:* string

---

##### `passwordNeverExpires`<sup>Required</sup> <a name="passwordNeverExpires" id="@cdktf/provider-ad.user.User.property.passwordNeverExpires"></a>

```typescript
public readonly passwordNeverExpires: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `poBox`<sup>Required</sup> <a name="poBox" id="@cdktf/provider-ad.user.User.property.poBox"></a>

```typescript
public readonly poBox: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-ad.user.User.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-ad.user.User.property.principalName"></a>

```typescript
public readonly principalName: string;
```

- *Type:* string

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.user.User.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

---

##### `smartCardLogonRequired`<sup>Required</sup> <a name="smartCardLogonRequired" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequired"></a>

```typescript
public readonly smartCardLogonRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-ad.user.User.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-ad.user.User.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-ad.user.User.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-ad.user.User.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `trustedForDelegation`<sup>Required</sup> <a name="trustedForDelegation" id="@cdktf/provider-ad.user.User.property.trustedForDelegation"></a>

```typescript
public readonly trustedForDelegation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdProviderConfig <a name="AdProviderConfig" id="@cdktf/provider-ad.provider.AdProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.provider.AdProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-ad'

const adProviderConfig: provider.AdProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname">winrmHostname</a></code> | <code>string</code> | The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword">winrmPassword</a></code> | <code>string</code> | The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername">winrmUsername</a></code> | <code>string</code> | The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.domainController">domainController</a></code> | <code>string</code> | Use a specific domain controller. (default: none, environment variable: AD_DC). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf">krbConf</a></code> | <code>string</code> | Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab">krbKeytab</a></code> | <code>string</code> | Path to a keytab file to be used instead of a password. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm">krbRealm</a></code> | <code>string</code> | The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn">krbSpn</a></code> | <code>string</code> | Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure">winrmInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials">winrmPassCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort">winrmPort</a></code> | <code>number</code> | The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto">winrmProto</a></code> | <code>string</code> | The WinRM protocol we will use. (default: http, environment variable: AD_PROTO). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm">winrmUseNtlm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM). |

---

##### `winrmHostname`<sup>Required</sup> <a name="winrmHostname" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname"></a>

```typescript
public readonly winrmHostname: string;
```

- *Type:* string

The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_hostname AdProvider#winrm_hostname}

---

##### `winrmPassword`<sup>Required</sup> <a name="winrmPassword" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword"></a>

```typescript
public readonly winrmPassword: string;
```

- *Type:* string

The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_password AdProvider#winrm_password}

---

##### `winrmUsername`<sup>Required</sup> <a name="winrmUsername" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername"></a>

```typescript
public readonly winrmUsername: string;
```

- *Type:* string

The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_username AdProvider#winrm_username}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#alias AdProvider#alias}

---

##### `domainController`<sup>Optional</sup> <a name="domainController" id="@cdktf/provider-ad.provider.AdProviderConfig.property.domainController"></a>

```typescript
public readonly domainController: string;
```

- *Type:* string

Use a specific domain controller. (default: none, environment variable: AD_DC).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#domain_controller AdProvider#domain_controller}

---

##### `krbConf`<sup>Optional</sup> <a name="krbConf" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf"></a>

```typescript
public readonly krbConf: string;
```

- *Type:* string

Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_conf AdProvider#krb_conf}

---

##### `krbKeytab`<sup>Optional</sup> <a name="krbKeytab" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab"></a>

```typescript
public readonly krbKeytab: string;
```

- *Type:* string

Path to a keytab file to be used instead of a password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_keytab AdProvider#krb_keytab}

---

##### `krbRealm`<sup>Optional</sup> <a name="krbRealm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm"></a>

```typescript
public readonly krbRealm: string;
```

- *Type:* string

The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_realm AdProvider#krb_realm}

---

##### `krbSpn`<sup>Optional</sup> <a name="krbSpn" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn"></a>

```typescript
public readonly krbSpn: string;
```

- *Type:* string

Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_spn AdProvider#krb_spn}

---

##### `winrmInsecure`<sup>Optional</sup> <a name="winrmInsecure" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure"></a>

```typescript
public readonly winrmInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_insecure AdProvider#winrm_insecure}

---

##### `winrmPassCredentials`<sup>Optional</sup> <a name="winrmPassCredentials" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials"></a>

```typescript
public readonly winrmPassCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_pass_credentials AdProvider#winrm_pass_credentials}

---

##### `winrmPort`<sup>Optional</sup> <a name="winrmPort" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort"></a>

```typescript
public readonly winrmPort: number;
```

- *Type:* number

The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_port AdProvider#winrm_port}

---

##### `winrmProto`<sup>Optional</sup> <a name="winrmProto" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto"></a>

```typescript
public readonly winrmProto: string;
```

- *Type:* string

The WinRM protocol we will use. (default: http, environment variable: AD_PROTO).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_proto AdProvider#winrm_proto}

---

##### `winrmUseNtlm`<sup>Optional</sup> <a name="winrmUseNtlm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm"></a>

```typescript
public readonly winrmUseNtlm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_use_ntlm AdProvider#winrm_use_ntlm}

---

### ComputerConfig <a name="ComputerConfig" id="@cdktf/provider-ad.computer.ComputerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.computer.ComputerConfig.Initializer"></a>

```typescript
import { computer } from '@cdktf/provider-ad'

const computerConfig: computer.ComputerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.name">name</a></code> | <code>string</code> | The name for the computer account. |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.container">container</a></code> | <code>string</code> | The DN of the container used to hold the computer account. |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.description">description</a></code> | <code>string</code> | Specifies a description of the object. This parameter sets the value of the Description property for the computer object. |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#id Computer#id}. |
| <code><a href="#@cdktf/provider-ad.computer.ComputerConfig.property.pre2Kname">pre2Kname</a></code> | <code>string</code> | The pre-win2k name for the computer account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.computer.ComputerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.computer.ComputerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.computer.ComputerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.computer.ComputerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.computer.ComputerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.computer.ComputerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.computer.ComputerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.computer.ComputerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the computer account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#name Computer#name}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-ad.computer.ComputerConfig.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

The DN of the container used to hold the computer account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#container Computer#container}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.computer.ComputerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Specifies a description of the object. This parameter sets the value of the Description property for the computer object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#description Computer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.computer.ComputerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#id Computer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pre2Kname`<sup>Optional</sup> <a name="pre2Kname" id="@cdktf/provider-ad.computer.ComputerConfig.property.pre2Kname"></a>

```typescript
public readonly pre2Kname: string;
```

- *Type:* string

The pre-win2k name for the computer account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/computer#pre2kname Computer#pre2kname}

---

### DataAdComputerConfig <a name="DataAdComputerConfig" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.Initializer"></a>

```typescript
import { dataAdComputer } from '@cdktf/provider-ad'

const dataAdComputerConfig: dataAdComputer.DataAdComputerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.computerId">computerId</a></code> | <code>string</code> | The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.dn">dn</a></code> | <code>string</code> | The Distinguished Name of the computer object. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.guid">guid</a></code> | <code>string</code> | The GUID of the computer object. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#id DataAdComputer#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computerId`<sup>Optional</sup> <a name="computerId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.computerId"></a>

```typescript
public readonly computerId: string;
```

- *Type:* string

The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#computer_id DataAdComputer#computer_id}

---

##### `dn`<sup>Optional</sup> <a name="dn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

The Distinguished Name of the computer object.

This field is deprecated in favour of `computer_id`. In the future this field will be read-only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#dn DataAdComputer#dn}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

The GUID of the computer object.

This field is deprecated in favour of `computer_id`. In the future this field will be read-only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#guid DataAdComputer#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/computer#id DataAdComputer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAdGpoConfig <a name="DataAdGpoConfig" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.Initializer"></a>

```typescript
import { dataAdGpo } from '@cdktf/provider-ad'

const dataAdGpoConfig: dataAdGpo.DataAdGpoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.guid">guid</a></code> | <code>string</code> | GUID of the GPO. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/gpo#id DataAdGpo#id}. |
| <code><a href="#@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.name">name</a></code> | <code>string</code> | Name of the GPO. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

GUID of the GPO.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/gpo#guid DataAdGpo#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/gpo#id DataAdGpo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ad.dataAdGpo.DataAdGpoConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the GPO.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/gpo#name DataAdGpo#name}

---

### DataAdGroupConfig <a name="DataAdGroupConfig" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.Initializer"></a>

```typescript
import { dataAdGroup } from '@cdktf/provider-ad'

const dataAdGroupConfig: dataAdGroup.DataAdGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.groupId">groupId</a></code> | <code>string</code> | The group's identifier. It can be the group's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/group#id DataAdGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The group's identifier. It can be the group's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/group#group_id DataAdGroup#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.dataAdGroup.DataAdGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/group#id DataAdGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAdOuConfig <a name="DataAdOuConfig" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.Initializer"></a>

```typescript
import { dataAdOu } from '@cdktf/provider-ad'

const dataAdOuConfig: dataAdOu.DataAdOuConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dn">dn</a></code> | <code>string</code> | Distinguished Name of the OU object. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/ou#id DataAdOu#id}. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.name">name</a></code> | <code>string</code> | Name of the OU object. If this is used then the `path` attribute needs to be set as well. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.ouId">ouId</a></code> | <code>string</code> | The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.path">path</a></code> | <code>string</code> | Path of the OU object. If this is used then the `Name` attribute needs to be set as well. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dn`<sup>Optional</sup> <a name="dn" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

Distinguished Name of the OU object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/ou#dn DataAdOu#dn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/ou#id DataAdOu#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the OU object. If this is used then the `path` attribute needs to be set as well.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/ou#name DataAdOu#name}

---

##### `ouId`<sup>Optional</sup> <a name="ouId" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.ouId"></a>

```typescript
public readonly ouId: string;
```

- *Type:* string

The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/ou#ou_id DataAdOu#ou_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the OU object. If this is used then the `Name` attribute needs to be set as well.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/ou#path DataAdOu#path}

---

### DataAdUserConfig <a name="DataAdUserConfig" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.Initializer"></a>

```typescript
import { dataAdUser } from '@cdktf/provider-ad'

const dataAdUserConfig: dataAdUser.DataAdUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.userId">userId</a></code> | <code>string</code> | The user's identifier. It can be the group's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/user#id DataAdUser#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The user's identifier. It can be the group's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/user#user_id DataAdUser#user_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/d/user#id DataAdUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GplinkConfig <a name="GplinkConfig" id="@cdktf/provider-ad.gplink.GplinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gplink.GplinkConfig.Initializer"></a>

```typescript
import { gplink } from '@cdktf/provider-ad'

const gplinkConfig: gplink.GplinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.gpoGuid">gpoGuid</a></code> | <code>string</code> | The GUID of the GPO that will be linked to the container object. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.targetDn">targetDn</a></code> | <code>string</code> | The DN of the object the GPO will be linked to. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls the state of the GP link between a GPO and a container object. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.enforced">enforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the GPO will be enforced on the container object. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gplink#id Gplink#id}. |
| <code><a href="#@cdktf/provider-ad.gplink.GplinkConfig.property.order">order</a></code> | <code>number</code> | Sets the precedence between multiple GPOs linked to the same container object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gplink.GplinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gplink.GplinkConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gplink.GplinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gplink.GplinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gplink.GplinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gplink.GplinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gplink.GplinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gpoGuid`<sup>Required</sup> <a name="gpoGuid" id="@cdktf/provider-ad.gplink.GplinkConfig.property.gpoGuid"></a>

```typescript
public readonly gpoGuid: string;
```

- *Type:* string

The GUID of the GPO that will be linked to the container object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gplink#gpo_guid Gplink#gpo_guid}

---

##### `targetDn`<sup>Required</sup> <a name="targetDn" id="@cdktf/provider-ad.gplink.GplinkConfig.property.targetDn"></a>

```typescript
public readonly targetDn: string;
```

- *Type:* string

The DN of the object the GPO will be linked to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gplink#target_dn Gplink#target_dn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ad.gplink.GplinkConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls the state of the GP link between a GPO and a container object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gplink#enabled Gplink#enabled}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktf/provider-ad.gplink.GplinkConfig.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the GPO will be enforced on the container object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gplink#enforced Gplink#enforced}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.gplink.GplinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gplink#id Gplink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-ad.gplink.GplinkConfig.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Sets the precedence between multiple GPOs linked to the same container object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gplink#order Gplink#order}

---

### GpoConfig <a name="GpoConfig" id="@cdktf/provider-ad.gpo.GpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpo.GpoConfig.Initializer"></a>

```typescript
import { gpo } from '@cdktf/provider-ad'

const gpoConfig: gpo.GpoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.name">name</a></code> | <code>string</code> | Name of the GPO. |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.description">description</a></code> | <code>string</code> | Description of the GPO. |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.domain">domain</a></code> | <code>string</code> | Domain of the GPO. |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo#id Gpo#id}. |
| <code><a href="#@cdktf/provider-ad.gpo.GpoConfig.property.status">status</a></code> | <code>string</code> | Status of the GPO. Can be one of `AllSettingsEnabled`, `UserSettingsDisabled`, `ComputerSettingsDisabled`, or `AllSettingsDisabled` (case sensitive). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpo.GpoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpo.GpoConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpo.GpoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpo.GpoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpo.GpoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpo.GpoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpo.GpoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.gpo.GpoConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the GPO.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo#name Gpo#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.gpo.GpoConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the GPO.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo#description Gpo#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-ad.gpo.GpoConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain of the GPO.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo#domain Gpo#domain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.gpo.GpoConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo#id Gpo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-ad.gpo.GpoConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the GPO. Can be one of `AllSettingsEnabled`, `UserSettingsDisabled`, `ComputerSettingsDisabled`, or `AllSettingsDisabled` (case sensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo#status Gpo#status}

---

### GpoSecurityAccountLockout <a name="GpoSecurityAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityAccountLockout: gpoSecurity.GpoSecurityAccountLockout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire">forceLogoffWhenHourExpire</a></code> | <code>string</code> | Disconnect SMB sessions when logon hours expire. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount">lockoutBadCount</a></code> | <code>string</code> | Number of failed logon attempts until a account is locked. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration">lockoutDuration</a></code> | <code>string</code> | Number of minutes a locked out account must remain locked out. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount">resetLockoutCount</a></code> | <code>string</code> | Number of minutes a account will remain locked after a failed logon attempt. |

---

##### `forceLogoffWhenHourExpire`<sup>Optional</sup> <a name="forceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire"></a>

```typescript
public readonly forceLogoffWhenHourExpire: string;
```

- *Type:* string

Disconnect SMB sessions when logon hours expire.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#force_logoff_when_hour_expire GpoSecurity#force_logoff_when_hour_expire}

---

##### `lockoutBadCount`<sup>Optional</sup> <a name="lockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount"></a>

```typescript
public readonly lockoutBadCount: string;
```

- *Type:* string

Number of failed logon attempts until a account is locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#lockout_bad_count GpoSecurity#lockout_bad_count}

---

##### `lockoutDuration`<sup>Optional</sup> <a name="lockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: string;
```

- *Type:* string

Number of minutes a locked out account must remain locked out.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#lockout_duration GpoSecurity#lockout_duration}

---

##### `resetLockoutCount`<sup>Optional</sup> <a name="resetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount"></a>

```typescript
public readonly resetLockoutCount: string;
```

- *Type:* string

Number of minutes a account will remain locked after a failed logon attempt.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#reset_lockout_count GpoSecurity#reset_lockout_count}

---

### GpoSecurityApplicationLog <a name="GpoSecurityApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityApplicationLog: gpoSecurity.GpoSecurityApplicationLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays">retentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityAuditLog <a name="GpoSecurityAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityAuditLog: gpoSecurity.GpoSecurityAuditLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays">retentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityConfig <a name="GpoSecurityConfig" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityConfig: gpoSecurity.GpoSecurityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer">gpoContainer</a></code> | <code>string</code> | The GUID of the container the security settings belong to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout">accountLockout</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout</code> | account_lockout block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog">applicationLog</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog</code> | application_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog">auditLog</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog</code> | audit_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit">eventAudit</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit</code> | event_audit block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem">filesystem</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem[]</code> | filesystem block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#id GpoSecurity#id}. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy">kerberosPolicy</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy</code> | kerberos_policy block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies">passwordPolicies</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies</code> | password_policies block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys">registryKeys</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys[]</code> | registry_keys block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues">registryValues</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues[]</code> | registry_values block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups">restrictedGroups</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups[]</code> | restricted_groups block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog">systemLog</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog</code> | system_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices">systemServices</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices[]</code> | system_services block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gpoContainer`<sup>Required</sup> <a name="gpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer"></a>

```typescript
public readonly gpoContainer: string;
```

- *Type:* string

The GUID of the container the security settings belong to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#gpo_container GpoSecurity#gpo_container}

---

##### `accountLockout`<sup>Optional</sup> <a name="accountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout"></a>

```typescript
public readonly accountLockout: GpoSecurityAccountLockout;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout

account_lockout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#account_lockout GpoSecurity#account_lockout}

---

##### `applicationLog`<sup>Optional</sup> <a name="applicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog"></a>

```typescript
public readonly applicationLog: GpoSecurityApplicationLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog

application_log block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#application_log GpoSecurity#application_log}

---

##### `auditLog`<sup>Optional</sup> <a name="auditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog"></a>

```typescript
public readonly auditLog: GpoSecurityAuditLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog

audit_log block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_log GpoSecurity#audit_log}

---

##### `eventAudit`<sup>Optional</sup> <a name="eventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit"></a>

```typescript
public readonly eventAudit: GpoSecurityEventAudit;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit

event_audit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#event_audit GpoSecurity#event_audit}

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem"></a>

```typescript
public readonly filesystem: IResolvable | GpoSecurityFilesystem[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem[]

filesystem block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#filesystem GpoSecurity#filesystem}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#id GpoSecurity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosPolicy`<sup>Optional</sup> <a name="kerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy"></a>

```typescript
public readonly kerberosPolicy: GpoSecurityKerberosPolicy;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy

kerberos_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#kerberos_policy GpoSecurity#kerberos_policy}

---

##### `passwordPolicies`<sup>Optional</sup> <a name="passwordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies"></a>

```typescript
public readonly passwordPolicies: GpoSecurityPasswordPolicies;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies

password_policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#password_policies GpoSecurity#password_policies}

---

##### `registryKeys`<sup>Optional</sup> <a name="registryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys"></a>

```typescript
public readonly registryKeys: IResolvable | GpoSecurityRegistryKeys[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys[]

registry_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#registry_keys GpoSecurity#registry_keys}

---

##### `registryValues`<sup>Optional</sup> <a name="registryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues"></a>

```typescript
public readonly registryValues: IResolvable | GpoSecurityRegistryValues[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues[]

registry_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#registry_values GpoSecurity#registry_values}

---

##### `restrictedGroups`<sup>Optional</sup> <a name="restrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups"></a>

```typescript
public readonly restrictedGroups: IResolvable | GpoSecurityRestrictedGroups[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups[]

restricted_groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#restricted_groups GpoSecurity#restricted_groups}

---

##### `systemLog`<sup>Optional</sup> <a name="systemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog"></a>

```typescript
public readonly systemLog: GpoSecuritySystemLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog

system_log block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#system_log GpoSecurity#system_log}

---

##### `systemServices`<sup>Optional</sup> <a name="systemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices"></a>

```typescript
public readonly systemServices: IResolvable | GpoSecuritySystemServices[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices[]

system_services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#system_services GpoSecurity#system_services}

---

### GpoSecurityEventAudit <a name="GpoSecurityEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityEventAudit: gpoSecurity.GpoSecurityEventAudit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon">auditAccountLogon</a></code> | <code>string</code> | Audit credential validation. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage">auditAccountManage</a></code> | <code>string</code> | Audit account management events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess">auditDsAccess</a></code> | <code>string</code> | Audit access attempts to AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents">auditLogonEvents</a></code> | <code>string</code> | Audit logon events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess">auditObjectAccess</a></code> | <code>string</code> | Audit access attempts to non-AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange">auditPolicyChange</a></code> | <code>string</code> | Audit attempts to change a policy. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse">auditPrivilegeUse</a></code> | <code>string</code> | Audit user attempts of exercising user rights. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking">auditProcessTracking</a></code> | <code>string</code> | Audit process related events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents">auditSystemEvents</a></code> | <code>string</code> | Audit system events. |

---

##### `auditAccountLogon`<sup>Optional</sup> <a name="auditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon"></a>

```typescript
public readonly auditAccountLogon: string;
```

- *Type:* string

Audit credential validation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_account_logon GpoSecurity#audit_account_logon}

---

##### `auditAccountManage`<sup>Optional</sup> <a name="auditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage"></a>

```typescript
public readonly auditAccountManage: string;
```

- *Type:* string

Audit account management events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_account_manage GpoSecurity#audit_account_manage}

---

##### `auditDsAccess`<sup>Optional</sup> <a name="auditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess"></a>

```typescript
public readonly auditDsAccess: string;
```

- *Type:* string

Audit access attempts to AD objects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_ds_access GpoSecurity#audit_ds_access}

---

##### `auditLogonEvents`<sup>Optional</sup> <a name="auditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents"></a>

```typescript
public readonly auditLogonEvents: string;
```

- *Type:* string

Audit logon events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_logon_events GpoSecurity#audit_logon_events}

---

##### `auditObjectAccess`<sup>Optional</sup> <a name="auditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess"></a>

```typescript
public readonly auditObjectAccess: string;
```

- *Type:* string

Audit access attempts to non-AD objects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_object_access GpoSecurity#audit_object_access}

---

##### `auditPolicyChange`<sup>Optional</sup> <a name="auditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange"></a>

```typescript
public readonly auditPolicyChange: string;
```

- *Type:* string

Audit attempts to change a policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_policy_change GpoSecurity#audit_policy_change}

---

##### `auditPrivilegeUse`<sup>Optional</sup> <a name="auditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse"></a>

```typescript
public readonly auditPrivilegeUse: string;
```

- *Type:* string

Audit user attempts of exercising user rights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_privilege_use GpoSecurity#audit_privilege_use}

---

##### `auditProcessTracking`<sup>Optional</sup> <a name="auditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking"></a>

```typescript
public readonly auditProcessTracking: string;
```

- *Type:* string

Audit process related events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_process_tracking GpoSecurity#audit_process_tracking}

---

##### `auditSystemEvents`<sup>Optional</sup> <a name="auditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents"></a>

```typescript
public readonly auditSystemEvents: string;
```

- *Type:* string

Audit system events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_system_events GpoSecurity#audit_system_events}

---

### GpoSecurityFilesystem <a name="GpoSecurityFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityFilesystem: gpoSecurity.GpoSecurityFilesystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl">acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path">path</a></code> | <code>string</code> | Path of the file or directory. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode">propagationMode</a></code> | <code>string</code> | Control permission propagation. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#acl GpoSecurity#acl}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the file or directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#path GpoSecurity#path}

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode"></a>

```typescript
public readonly propagationMode: string;
```

- *Type:* string

Control permission propagation.

0: Propagate permissions to all subfolders and files, 1: Replace existing permissions on all subfolders and files, 2: Do not allow permissions to be replaced.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityKerberosPolicy <a name="GpoSecurityKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityKerberosPolicy: gpoSecurity.GpoSecurityKerberosPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew">maxClockSkew</a></code> | <code>string</code> | Maximum time difference, in minutes, between the client clock and the server clock. (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge">maxRenewAge</a></code> | <code>string</code> | Number of days during which a ticket-granting ticket can be renewed (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge">maxServiceAge</a></code> | <code>string</code> | Maximum amount of minutes a ticket must be valid to access a service or resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge">maxTicketAge</a></code> | <code>string</code> | Maximum amount of hours a ticket-granting ticket is valid (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient">ticketValidateClient</a></code> | <code>string</code> | Control if the session ticket is validated for every request. A non-zero value disables the policy. |

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: string;
```

- *Type:* string

Maximum time difference, in minutes, between the client clock and the server clock. (0-99999).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#max_clock_skew GpoSecurity#max_clock_skew}

---

##### `maxRenewAge`<sup>Optional</sup> <a name="maxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge"></a>

```typescript
public readonly maxRenewAge: string;
```

- *Type:* string

Number of days during which a ticket-granting ticket can be renewed (0-99999).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#max_renew_age GpoSecurity#max_renew_age}

---

##### `maxServiceAge`<sup>Optional</sup> <a name="maxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge"></a>

```typescript
public readonly maxServiceAge: string;
```

- *Type:* string

Maximum amount of minutes a ticket must be valid to access a service or resource.

Minimum should be 10 and maximum should be equal to `max_ticket_age`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#max_service_age GpoSecurity#max_service_age}

---

##### `maxTicketAge`<sup>Optional</sup> <a name="maxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge"></a>

```typescript
public readonly maxTicketAge: string;
```

- *Type:* string

Maximum amount of hours a ticket-granting ticket is valid (0-99999).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#max_ticket_age GpoSecurity#max_ticket_age}

---

##### `ticketValidateClient`<sup>Optional</sup> <a name="ticketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient"></a>

```typescript
public readonly ticketValidateClient: string;
```

- *Type:* string

Control if the session ticket is validated for every request. A non-zero value disables the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#ticket_validate_client GpoSecurity#ticket_validate_client}

---

### GpoSecurityPasswordPolicies <a name="GpoSecurityPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityPasswordPolicies: gpoSecurity.GpoSecurityPasswordPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword">clearTextPassword</a></code> | <code>string</code> | Store password with reversible encryption (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge">maximumPasswordAge</a></code> | <code>string</code> | Number of days before password expires (-1-999). If set to -1, it means the password never expires. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge">minimumPasswordAge</a></code> | <code>string</code> | Number of days a password must be used before changing it (0-999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>string</code> | Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity">passwordComplexity</a></code> | <code>string</code> | Password must meet complexity requirements (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize">passwordHistorySize</a></code> | <code>string</code> | The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16). |

---

##### `clearTextPassword`<sup>Optional</sup> <a name="clearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword"></a>

```typescript
public readonly clearTextPassword: string;
```

- *Type:* string

Store password with reversible encryption (0-2^16).

The password will not be stored with reversible encryption if the value is set to 0. Reversible encryption will be used in any other case.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#clear_text_password GpoSecurity#clear_text_password}

---

##### `maximumPasswordAge`<sup>Optional</sup> <a name="maximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge"></a>

```typescript
public readonly maximumPasswordAge: string;
```

- *Type:* string

Number of days before password expires (-1-999). If set to -1, it means the password never expires.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#maximum_password_age GpoSecurity#maximum_password_age}

---

##### `minimumPasswordAge`<sup>Optional</sup> <a name="minimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge"></a>

```typescript
public readonly minimumPasswordAge: string;
```

- *Type:* string

Number of days a password must be used before changing it (0-999).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#minimum_password_age GpoSecurity#minimum_password_age}

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="minimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength"></a>

```typescript
public readonly minimumPasswordLength: string;
```

- *Type:* string

Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#minimum_password_length GpoSecurity#minimum_password_length}

---

##### `passwordComplexity`<sup>Optional</sup> <a name="passwordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity"></a>

```typescript
public readonly passwordComplexity: string;
```

- *Type:* string

Password must meet complexity requirements (0-2^16).

If set to 0, then requirements do not apply, any other value means requirements are applied

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#password_complexity GpoSecurity#password_complexity}

---

##### `passwordHistorySize`<sup>Optional</sup> <a name="passwordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize"></a>

```typescript
public readonly passwordHistorySize: string;
```

- *Type:* string

The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16).

A value of 0 indicates that the password history is disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#password_history_size GpoSecurity#password_history_size}

---

### GpoSecurityRegistryKeys <a name="GpoSecurityRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityRegistryKeys: gpoSecurity.GpoSecurityRegistryKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl">acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName">keyName</a></code> | <code>string</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode">propagationMode</a></code> | <code>string</code> | Control permission propagation. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#acl GpoSecurity#acl}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#key_name GpoSecurity#key_name}

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode"></a>

```typescript
public readonly propagationMode: string;
```

- *Type:* string

Control permission propagation.

0: Propagate permissions to all subkeys, 1: Replace existing permissions on all subkeys, 2: Do not allow permissions to be replaced on the key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityRegistryValues <a name="GpoSecurityRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityRegistryValues: gpoSecurity.GpoSecurityRegistryValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName">keyName</a></code> | <code>string</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value">value</a></code> | <code>string</code> | The value of the key, matching the type set in `value_type`. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType">valueType</a></code> | <code>string</code> | Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#key_name GpoSecurity#key_name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the key, matching the type set in `value_type`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#value GpoSecurity#value}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#value_type GpoSecurity#value_type}

---

### GpoSecurityRestrictedGroups <a name="GpoSecurityRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecurityRestrictedGroups: gpoSecurity.GpoSecurityRestrictedGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof">groupMemberof</a></code> | <code>string</code> | Comma separated list of group names or SIDs that this group belongs to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers">groupMembers</a></code> | <code>string</code> | Comma separated list of group names or SIDs that are members of the group. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName">groupName</a></code> | <code>string</code> | Name of the group we are managing. |

---

##### `groupMemberof`<sup>Required</sup> <a name="groupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof"></a>

```typescript
public readonly groupMemberof: string;
```

- *Type:* string

Comma separated list of group names or SIDs that this group belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#group_memberof GpoSecurity#group_memberof}

---

##### `groupMembers`<sup>Required</sup> <a name="groupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers"></a>

```typescript
public readonly groupMembers: string;
```

- *Type:* string

Comma separated list of group names or SIDs that are members of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#group_members GpoSecurity#group_members}

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Name of the group we are managing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#group_name GpoSecurity#group_name}

---

### GpoSecuritySystemLog <a name="GpoSecuritySystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecuritySystemLog: gpoSecurity.GpoSecuritySystemLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays">retentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `auditLogRetentionPeriod`<sup>Optional</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `maximumLogSize`<sup>Optional</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `restrictGuestAccess`<sup>Optional</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecuritySystemServices <a name="GpoSecuritySystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

const gpoSecuritySystemServices: gpoSecurity.GpoSecuritySystemServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl">acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName">serviceName</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode">startupMode</a></code> | <code>string</code> | Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled. |

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#acl GpoSecurity#acl}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#service_name GpoSecurity#service_name}

---

##### `startupMode`<sup>Required</sup> <a name="startupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode"></a>

```typescript
public readonly startupMode: string;
```

- *Type:* string

Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/gpo_security#startup_mode GpoSecurity#startup_mode}

---

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-ad.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.group.GroupConfig.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-ad'

const groupConfig: group.GroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.container">container</a></code> | <code>string</code> | A DN of a container object holding the group. |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.name">name</a></code> | <code>string</code> | The name of the group. |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.samAccountName">samAccountName</a></code> | <code>string</code> | The pre-win2k name of the group. |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.category">category</a></code> | <code>string</code> | The group's category. Can be one of `distribution` or `security` (case sensitive). |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.description">description</a></code> | <code>string</code> | Description of the Group. |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#id Group#id}. |
| <code><a href="#@cdktf/provider-ad.group.GroupConfig.property.scope">scope</a></code> | <code>string</code> | The group's scope. Can be one of `global`, `domainlocal`, or `universal` (case sensitive). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.group.GroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.group.GroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.group.GroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.group.GroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.group.GroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.group.GroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.group.GroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-ad.group.GroupConfig.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

A DN of a container object holding the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#container Group#container}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.group.GroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#name Group#name}

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.group.GroupConfig.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

The pre-win2k name of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#sam_account_name Group#sam_account_name}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-ad.group.GroupConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The group's category. Can be one of `distribution` or `security` (case sensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#category Group#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.group.GroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#description Group#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.group.GroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-ad.group.GroupConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The group's scope. Can be one of `global`, `domainlocal`, or `universal` (case sensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group#scope Group#scope}

---

### GroupMembershipConfig <a name="GroupMembershipConfig" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.Initializer"></a>

```typescript
import { groupMembership } from '@cdktf/provider-ad'

const groupMembershipConfig: groupMembership.GroupMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.groupId">groupId</a></code> | <code>string</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.groupMembers">groupMembers</a></code> | <code>string[]</code> | A list of member AD Principals. |
| <code><a href="#@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group_membership#id GroupMembership#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The ID of the group.

This can be a GUID, a SID, a Distinguished Name, or the SAM Account Name of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group_membership#group_id GroupMembership#group_id}

---

##### `groupMembers`<sup>Required</sup> <a name="groupMembers" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.groupMembers"></a>

```typescript
public readonly groupMembers: string[];
```

- *Type:* string[]

A list of member AD Principals.

Each principal can be identified by its GUID, SID, Distinguished Name, or SAM Account Name. Only one is required

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group_membership#group_members GroupMembership#group_members}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.groupMembership.GroupMembershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/group_membership#id GroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OuConfig <a name="OuConfig" id="@cdktf/provider-ad.ou.OuConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.ou.OuConfig.Initializer"></a>

```typescript
import { ou } from '@cdktf/provider-ad'

const ouConfig: ou.OuConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.name">name</a></code> | <code>string</code> | Name of the OU. |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.description">description</a></code> | <code>string</code> | Description of the OU. |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/ou#id Ou#id}. |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.path">path</a></code> | <code>string</code> | DN of the object that contains the OU. |
| <code><a href="#@cdktf/provider-ad.ou.OuConfig.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Protect this OU from being deleted accidentaly. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.ou.OuConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.ou.OuConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.ou.OuConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.ou.OuConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.ou.OuConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.ou.OuConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.ou.OuConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.ou.OuConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the OU.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/ou#name Ou#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.ou.OuConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the OU.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/ou#description Ou#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.ou.OuConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/ou#id Ou#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-ad.ou.OuConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

DN of the object that contains the OU.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/ou#path Ou#path}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-ad.ou.OuConfig.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Protect this OU from being deleted accidentaly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/ou#protected Ou#protected}

---

### UserConfig <a name="UserConfig" id="@cdktf/provider-ad.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-ad'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.displayName">displayName</a></code> | <code>string</code> | The Display Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.principalName">principalName</a></code> | <code>string</code> | The Principal Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.samAccountName">samAccountName</a></code> | <code>string</code> | The pre-win2k user logon name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword">cannotChangePassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the user will not be allowed to change their password. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.city">city</a></code> | <code>string</code> | Specifies the user's town or city. This parameter sets the City property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.company">company</a></code> | <code>string</code> | Specifies the user's company. This parameter sets the Company property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.container">container</a></code> | <code>string</code> | A DN of the container object that will be holding the user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.country">country</a></code> | <code>string</code> | Specifies the country by setting the country code (refer to ISO 3166). |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.customAttributes">customAttributes</a></code> | <code>string</code> | JSON encoded map that represents key/value pairs for custom attributes. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.department">department</a></code> | <code>string</code> | Specifies the user's department. This parameter sets the Department property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.description">description</a></code> | <code>string</code> | Specifies a description of the object. This parameter sets the value of the Description property for the user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.division">division</a></code> | <code>string</code> | Specifies the user's division. This parameter sets the Division property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.emailAddress">emailAddress</a></code> | <code>string</code> | Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeId">employeeId</a></code> | <code>string</code> | Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeNumber">employeeNumber</a></code> | <code>string</code> | Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to false, the user will be disabled. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.fax">fax</a></code> | <code>string</code> | Specifies the user's fax phone number. This parameter sets the Fax property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.givenName">givenName</a></code> | <code>string</code> | Specifies the user's given name. This parameter sets the GivenName property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDrive">homeDrive</a></code> | <code>string</code> | Specifies a drive that is associated with the UNC path defined by the HomeDirectory property. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePage">homePage</a></code> | <code>string</code> | Specifies the URL of the home page of the object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePhone">homePhone</a></code> | <code>string</code> | Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#id User#id}. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initialPassword">initialPassword</a></code> | <code>string</code> | The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initials">initials</a></code> | <code>string</code> | Specifies the initials that represent part of a user's name. Maximum 6 char. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.office">office</a></code> | <code>string</code> | Specifies the location of the user's office or place of business. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.officePhone">officePhone</a></code> | <code>string</code> | Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.organization">organization</a></code> | <code>string</code> | Specifies the user's organization. This parameter sets the Organization property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.otherName">otherName</a></code> | <code>string</code> | Specifies a name in addition to a user's given name and surname, such as the user's middle name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires">passwordNeverExpires</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the password for this user will not expire. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.poBox">poBox</a></code> | <code>string</code> | Specifies the user's post office box number. This parameter sets the POBox property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.postalCode">postalCode</a></code> | <code>string</code> | Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired">smartCardLogonRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, a smart card is required to logon. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.state">state</a></code> | <code>string</code> | Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.streetAddress">streetAddress</a></code> | <code>string</code> | Specifies the user's street address. This parameter sets the StreetAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.surname">surname</a></code> | <code>string</code> | Specifies the user's last name or surname. This parameter sets the Surname property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.title">title</a></code> | <code>string</code> | Specifies the user's title. This parameter sets the Title property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation">trustedForDelegation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the user account is trusted for Kerberos delegation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.user.UserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ad.user.UserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The Display Name of an Active Directory user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#display_name User#display_name}

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-ad.user.UserConfig.property.principalName"></a>

```typescript
public readonly principalName: string;
```

- *Type:* string

The Principal Name of an Active Directory user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#principal_name User#principal_name}

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.user.UserConfig.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

The pre-win2k user logon name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#sam_account_name User#sam_account_name}

---

##### `cannotChangePassword`<sup>Optional</sup> <a name="cannotChangePassword" id="@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword"></a>

```typescript
public readonly cannotChangePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the user will not be allowed to change their password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#cannot_change_password User#cannot_change_password}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-ad.user.UserConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Specifies the user's town or city. This parameter sets the City property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#city User#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-ad.user.UserConfig.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

Specifies the user's company. This parameter sets the Company property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#company User#company}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-ad.user.UserConfig.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

A DN of the container object that will be holding the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#container User#container}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-ad.user.UserConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Specifies the country by setting the country code (refer to ISO 3166).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#country User#country}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-ad.user.UserConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: string;
```

- *Type:* string

JSON encoded map that represents key/value pairs for custom attributes.

Please note that `terraform import` will not import these attributes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#custom_attributes User#custom_attributes}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-ad.user.UserConfig.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

Specifies the user's department. This parameter sets the Department property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#department User#department}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.user.UserConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Specifies a description of the object. This parameter sets the value of the Description property for the user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#description User#description}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-ad.user.UserConfig.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

Specifies the user's division. This parameter sets the Division property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#division User#division}

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-ad.user.UserConfig.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#email_address User#email_address}

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktf/provider-ad.user.UserConfig.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#employee_id User#employee_id}

---

##### `employeeNumber`<sup>Optional</sup> <a name="employeeNumber" id="@cdktf/provider-ad.user.UserConfig.property.employeeNumber"></a>

```typescript
public readonly employeeNumber: string;
```

- *Type:* string

Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#employee_number User#employee_number}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ad.user.UserConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to false, the user will be disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#enabled User#enabled}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-ad.user.UserConfig.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

Specifies the user's fax phone number. This parameter sets the Fax property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#fax User#fax}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-ad.user.UserConfig.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

Specifies the user's given name. This parameter sets the GivenName property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#given_name User#given_name}

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/provider-ad.user.UserConfig.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#home_directory User#home_directory}

---

##### `homeDrive`<sup>Optional</sup> <a name="homeDrive" id="@cdktf/provider-ad.user.UserConfig.property.homeDrive"></a>

```typescript
public readonly homeDrive: string;
```

- *Type:* string

Specifies a drive that is associated with the UNC path defined by the HomeDirectory property.

The drive letter is specified as <DriveLetter>: where <DriveLetter> indicates the letter of the drive to associate. The <DriveLetter> must be a single, uppercase letter and the colon is required. This parameter sets the HomeDrive property of the user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#home_drive User#home_drive}

---

##### `homePage`<sup>Optional</sup> <a name="homePage" id="@cdktf/provider-ad.user.UserConfig.property.homePage"></a>

```typescript
public readonly homePage: string;
```

- *Type:* string

Specifies the URL of the home page of the object.

This parameter sets the homePage property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#home_page User#home_page}

---

##### `homePhone`<sup>Optional</sup> <a name="homePhone" id="@cdktf/provider-ad.user.UserConfig.property.homePhone"></a>

```typescript
public readonly homePhone: string;
```

- *Type:* string

Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#home_phone User#home_phone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.user.UserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialPassword`<sup>Optional</sup> <a name="initialPassword" id="@cdktf/provider-ad.user.UserConfig.property.initialPassword"></a>

```typescript
public readonly initialPassword: string;
```

- *Type:* string

The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#initial_password User#initial_password}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktf/provider-ad.user.UserConfig.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

Specifies the initials that represent part of a user's name. Maximum 6 char.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#initials User#initials}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-ad.user.UserConfig.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#mobile_phone User#mobile_phone}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktf/provider-ad.user.UserConfig.property.office"></a>

```typescript
public readonly office: string;
```

- *Type:* string

Specifies the location of the user's office or place of business.

This parameter sets the Office property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#office User#office}

---

##### `officePhone`<sup>Optional</sup> <a name="officePhone" id="@cdktf/provider-ad.user.UserConfig.property.officePhone"></a>

```typescript
public readonly officePhone: string;
```

- *Type:* string

Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#office_phone User#office_phone}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-ad.user.UserConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Specifies the user's organization. This parameter sets the Organization property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#organization User#organization}

---

##### `otherName`<sup>Optional</sup> <a name="otherName" id="@cdktf/provider-ad.user.UserConfig.property.otherName"></a>

```typescript
public readonly otherName: string;
```

- *Type:* string

Specifies a name in addition to a user's given name and surname, such as the user's middle name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#other_name User#other_name}

---

##### `passwordNeverExpires`<sup>Optional</sup> <a name="passwordNeverExpires" id="@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires"></a>

```typescript
public readonly passwordNeverExpires: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the password for this user will not expire.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#password_never_expires User#password_never_expires}

---

##### `poBox`<sup>Optional</sup> <a name="poBox" id="@cdktf/provider-ad.user.UserConfig.property.poBox"></a>

```typescript
public readonly poBox: string;
```

- *Type:* string

Specifies the user's post office box number. This parameter sets the POBox property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#po_box User#po_box}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-ad.user.UserConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#postal_code User#postal_code}

---

##### `smartCardLogonRequired`<sup>Optional</sup> <a name="smartCardLogonRequired" id="@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired"></a>

```typescript
public readonly smartCardLogonRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, a smart card is required to logon.

This parameter sets the SmartCardLoginRequired property for a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#smart_card_logon_required User#smart_card_logon_required}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-ad.user.UserConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#state User#state}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-ad.user.UserConfig.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

Specifies the user's street address. This parameter sets the StreetAddress property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-ad.user.UserConfig.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

Specifies the user's last name or surname. This parameter sets the Surname property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#surname User#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-ad.user.UserConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Specifies the user's title. This parameter sets the Title property of a user object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#title User#title}

---

##### `trustedForDelegation`<sup>Optional</sup> <a name="trustedForDelegation" id="@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation"></a>

```typescript
public readonly trustedForDelegation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the user account is trusted for Kerberos delegation.

A service that runs under an account that is trusted for Kerberos delegation can assume the identity of a client requesting the service. This parameter sets the TrustedForDelegation property of an account object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad/r/user#trusted_for_delegation User#trusted_for_delegation}

---

## Classes <a name="Classes" id="Classes"></a>

### GpoSecurityAccountLockoutOutputReference <a name="GpoSecurityAccountLockoutOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityAccountLockoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire">resetForceLogoffWhenHourExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount">resetLockoutBadCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration">resetLockoutDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount">resetResetLockoutCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForceLogoffWhenHourExpire` <a name="resetForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire"></a>

```typescript
public resetForceLogoffWhenHourExpire(): void
```

##### `resetLockoutBadCount` <a name="resetLockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount"></a>

```typescript
public resetLockoutBadCount(): void
```

##### `resetLockoutDuration` <a name="resetLockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration"></a>

```typescript
public resetLockoutDuration(): void
```

##### `resetResetLockoutCount` <a name="resetResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount"></a>

```typescript
public resetResetLockoutCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput">forceLogoffWhenHourExpireInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput">lockoutBadCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput">lockoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput">resetLockoutCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire">forceLogoffWhenHourExpire</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount">lockoutBadCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration">lockoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount">resetLockoutCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forceLogoffWhenHourExpireInput`<sup>Optional</sup> <a name="forceLogoffWhenHourExpireInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput"></a>

```typescript
public readonly forceLogoffWhenHourExpireInput: string;
```

- *Type:* string

---

##### `lockoutBadCountInput`<sup>Optional</sup> <a name="lockoutBadCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput"></a>

```typescript
public readonly lockoutBadCountInput: string;
```

- *Type:* string

---

##### `lockoutDurationInput`<sup>Optional</sup> <a name="lockoutDurationInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput"></a>

```typescript
public readonly lockoutDurationInput: string;
```

- *Type:* string

---

##### `resetLockoutCountInput`<sup>Optional</sup> <a name="resetLockoutCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput"></a>

```typescript
public readonly resetLockoutCountInput: string;
```

- *Type:* string

---

##### `forceLogoffWhenHourExpire`<sup>Required</sup> <a name="forceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire"></a>

```typescript
public readonly forceLogoffWhenHourExpire: string;
```

- *Type:* string

---

##### `lockoutBadCount`<sup>Required</sup> <a name="lockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount"></a>

```typescript
public readonly lockoutBadCount: string;
```

- *Type:* string

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: string;
```

- *Type:* string

---

##### `resetLockoutCount`<sup>Required</sup> <a name="resetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount"></a>

```typescript
public readonly resetLockoutCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityAccountLockout;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout

---


### GpoSecurityApplicationLogOutputReference <a name="GpoSecurityApplicationLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityApplicationLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod">resetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize">resetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess">resetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod"></a>

```typescript
public resetAuditLogRetentionPeriod(): void
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize"></a>

```typescript
public resetMaximumLogSize(): void
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess"></a>

```typescript
public resetRestrictGuestAccess(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```typescript
public readonly auditLogRetentionPeriodInput: string;
```

- *Type:* string

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput"></a>

```typescript
public readonly maximumLogSizeInput: string;
```

- *Type:* string

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput"></a>

```typescript
public readonly restrictGuestAccessInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityApplicationLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog

---


### GpoSecurityAuditLogOutputReference <a name="GpoSecurityAuditLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityAuditLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod">resetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize">resetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess">resetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod"></a>

```typescript
public resetAuditLogRetentionPeriod(): void
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize"></a>

```typescript
public resetMaximumLogSize(): void
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess"></a>

```typescript
public resetRestrictGuestAccess(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```typescript
public readonly auditLogRetentionPeriodInput: string;
```

- *Type:* string

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput"></a>

```typescript
public readonly maximumLogSizeInput: string;
```

- *Type:* string

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput"></a>

```typescript
public readonly restrictGuestAccessInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityAuditLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog

---


### GpoSecurityEventAuditOutputReference <a name="GpoSecurityEventAuditOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityEventAuditOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon">resetAuditAccountLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage">resetAuditAccountManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess">resetAuditDsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents">resetAuditLogonEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess">resetAuditObjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange">resetAuditPolicyChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse">resetAuditPrivilegeUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking">resetAuditProcessTracking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents">resetAuditSystemEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditAccountLogon` <a name="resetAuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon"></a>

```typescript
public resetAuditAccountLogon(): void
```

##### `resetAuditAccountManage` <a name="resetAuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage"></a>

```typescript
public resetAuditAccountManage(): void
```

##### `resetAuditDsAccess` <a name="resetAuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess"></a>

```typescript
public resetAuditDsAccess(): void
```

##### `resetAuditLogonEvents` <a name="resetAuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents"></a>

```typescript
public resetAuditLogonEvents(): void
```

##### `resetAuditObjectAccess` <a name="resetAuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess"></a>

```typescript
public resetAuditObjectAccess(): void
```

##### `resetAuditPolicyChange` <a name="resetAuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange"></a>

```typescript
public resetAuditPolicyChange(): void
```

##### `resetAuditPrivilegeUse` <a name="resetAuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse"></a>

```typescript
public resetAuditPrivilegeUse(): void
```

##### `resetAuditProcessTracking` <a name="resetAuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking"></a>

```typescript
public resetAuditProcessTracking(): void
```

##### `resetAuditSystemEvents` <a name="resetAuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents"></a>

```typescript
public resetAuditSystemEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput">auditAccountLogonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput">auditAccountManageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput">auditDsAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput">auditLogonEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput">auditObjectAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput">auditPolicyChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput">auditPrivilegeUseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput">auditProcessTrackingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput">auditSystemEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon">auditAccountLogon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage">auditAccountManage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess">auditDsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents">auditLogonEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess">auditObjectAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange">auditPolicyChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse">auditPrivilegeUse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking">auditProcessTracking</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents">auditSystemEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditAccountLogonInput`<sup>Optional</sup> <a name="auditAccountLogonInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput"></a>

```typescript
public readonly auditAccountLogonInput: string;
```

- *Type:* string

---

##### `auditAccountManageInput`<sup>Optional</sup> <a name="auditAccountManageInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput"></a>

```typescript
public readonly auditAccountManageInput: string;
```

- *Type:* string

---

##### `auditDsAccessInput`<sup>Optional</sup> <a name="auditDsAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput"></a>

```typescript
public readonly auditDsAccessInput: string;
```

- *Type:* string

---

##### `auditLogonEventsInput`<sup>Optional</sup> <a name="auditLogonEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput"></a>

```typescript
public readonly auditLogonEventsInput: string;
```

- *Type:* string

---

##### `auditObjectAccessInput`<sup>Optional</sup> <a name="auditObjectAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput"></a>

```typescript
public readonly auditObjectAccessInput: string;
```

- *Type:* string

---

##### `auditPolicyChangeInput`<sup>Optional</sup> <a name="auditPolicyChangeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput"></a>

```typescript
public readonly auditPolicyChangeInput: string;
```

- *Type:* string

---

##### `auditPrivilegeUseInput`<sup>Optional</sup> <a name="auditPrivilegeUseInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput"></a>

```typescript
public readonly auditPrivilegeUseInput: string;
```

- *Type:* string

---

##### `auditProcessTrackingInput`<sup>Optional</sup> <a name="auditProcessTrackingInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput"></a>

```typescript
public readonly auditProcessTrackingInput: string;
```

- *Type:* string

---

##### `auditSystemEventsInput`<sup>Optional</sup> <a name="auditSystemEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput"></a>

```typescript
public readonly auditSystemEventsInput: string;
```

- *Type:* string

---

##### `auditAccountLogon`<sup>Required</sup> <a name="auditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon"></a>

```typescript
public readonly auditAccountLogon: string;
```

- *Type:* string

---

##### `auditAccountManage`<sup>Required</sup> <a name="auditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage"></a>

```typescript
public readonly auditAccountManage: string;
```

- *Type:* string

---

##### `auditDsAccess`<sup>Required</sup> <a name="auditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess"></a>

```typescript
public readonly auditDsAccess: string;
```

- *Type:* string

---

##### `auditLogonEvents`<sup>Required</sup> <a name="auditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents"></a>

```typescript
public readonly auditLogonEvents: string;
```

- *Type:* string

---

##### `auditObjectAccess`<sup>Required</sup> <a name="auditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess"></a>

```typescript
public readonly auditObjectAccess: string;
```

- *Type:* string

---

##### `auditPolicyChange`<sup>Required</sup> <a name="auditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange"></a>

```typescript
public readonly auditPolicyChange: string;
```

- *Type:* string

---

##### `auditPrivilegeUse`<sup>Required</sup> <a name="auditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse"></a>

```typescript
public readonly auditPrivilegeUse: string;
```

- *Type:* string

---

##### `auditProcessTracking`<sup>Required</sup> <a name="auditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking"></a>

```typescript
public readonly auditProcessTracking: string;
```

- *Type:* string

---

##### `auditSystemEvents`<sup>Required</sup> <a name="auditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents"></a>

```typescript
public readonly auditSystemEvents: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityEventAudit;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit

---


### GpoSecurityFilesystemList <a name="GpoSecurityFilesystemList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityFilesystemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get"></a>

```typescript
public get(index: number): GpoSecurityFilesystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityFilesystem[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem[]

---


### GpoSecurityFilesystemOutputReference <a name="GpoSecurityFilesystemOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityFilesystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput">propagationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode">propagationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `propagationModeInput`<sup>Optional</sup> <a name="propagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput"></a>

```typescript
public readonly propagationModeInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode"></a>

```typescript
public readonly propagationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityFilesystem | IResolvable;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem | cdktf.IResolvable

---


### GpoSecurityKerberosPolicyOutputReference <a name="GpoSecurityKerberosPolicyOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityKerberosPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge">resetMaxRenewAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge">resetMaxServiceAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge">resetMaxTicketAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient">resetTicketValidateClient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew"></a>

```typescript
public resetMaxClockSkew(): void
```

##### `resetMaxRenewAge` <a name="resetMaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge"></a>

```typescript
public resetMaxRenewAge(): void
```

##### `resetMaxServiceAge` <a name="resetMaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge"></a>

```typescript
public resetMaxServiceAge(): void
```

##### `resetMaxTicketAge` <a name="resetMaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge"></a>

```typescript
public resetMaxTicketAge(): void
```

##### `resetTicketValidateClient` <a name="resetTicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient"></a>

```typescript
public resetTicketValidateClient(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput">maxRenewAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput">maxServiceAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput">maxTicketAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput">ticketValidateClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew">maxClockSkew</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge">maxRenewAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge">maxServiceAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge">maxTicketAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient">ticketValidateClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput"></a>

```typescript
public readonly maxClockSkewInput: string;
```

- *Type:* string

---

##### `maxRenewAgeInput`<sup>Optional</sup> <a name="maxRenewAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput"></a>

```typescript
public readonly maxRenewAgeInput: string;
```

- *Type:* string

---

##### `maxServiceAgeInput`<sup>Optional</sup> <a name="maxServiceAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput"></a>

```typescript
public readonly maxServiceAgeInput: string;
```

- *Type:* string

---

##### `maxTicketAgeInput`<sup>Optional</sup> <a name="maxTicketAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput"></a>

```typescript
public readonly maxTicketAgeInput: string;
```

- *Type:* string

---

##### `ticketValidateClientInput`<sup>Optional</sup> <a name="ticketValidateClientInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput"></a>

```typescript
public readonly ticketValidateClientInput: string;
```

- *Type:* string

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: string;
```

- *Type:* string

---

##### `maxRenewAge`<sup>Required</sup> <a name="maxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge"></a>

```typescript
public readonly maxRenewAge: string;
```

- *Type:* string

---

##### `maxServiceAge`<sup>Required</sup> <a name="maxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge"></a>

```typescript
public readonly maxServiceAge: string;
```

- *Type:* string

---

##### `maxTicketAge`<sup>Required</sup> <a name="maxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge"></a>

```typescript
public readonly maxTicketAge: string;
```

- *Type:* string

---

##### `ticketValidateClient`<sup>Required</sup> <a name="ticketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient"></a>

```typescript
public readonly ticketValidateClient: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityKerberosPolicy;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy

---


### GpoSecurityPasswordPoliciesOutputReference <a name="GpoSecurityPasswordPoliciesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityPasswordPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword">resetClearTextPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge">resetMaximumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge">resetMinimumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength">resetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity">resetPasswordComplexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize">resetPasswordHistorySize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClearTextPassword` <a name="resetClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword"></a>

```typescript
public resetClearTextPassword(): void
```

##### `resetMaximumPasswordAge` <a name="resetMaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge"></a>

```typescript
public resetMaximumPasswordAge(): void
```

##### `resetMinimumPasswordAge` <a name="resetMinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge"></a>

```typescript
public resetMinimumPasswordAge(): void
```

##### `resetMinimumPasswordLength` <a name="resetMinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength"></a>

```typescript
public resetMinimumPasswordLength(): void
```

##### `resetPasswordComplexity` <a name="resetPasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity"></a>

```typescript
public resetPasswordComplexity(): void
```

##### `resetPasswordHistorySize` <a name="resetPasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize"></a>

```typescript
public resetPasswordHistorySize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput">clearTextPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput">maximumPasswordAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput">minimumPasswordAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput">minimumPasswordLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput">passwordComplexityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput">passwordHistorySizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword">clearTextPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge">maximumPasswordAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge">minimumPasswordAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity">passwordComplexity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize">passwordHistorySize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clearTextPasswordInput`<sup>Optional</sup> <a name="clearTextPasswordInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput"></a>

```typescript
public readonly clearTextPasswordInput: string;
```

- *Type:* string

---

##### `maximumPasswordAgeInput`<sup>Optional</sup> <a name="maximumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput"></a>

```typescript
public readonly maximumPasswordAgeInput: string;
```

- *Type:* string

---

##### `minimumPasswordAgeInput`<sup>Optional</sup> <a name="minimumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput"></a>

```typescript
public readonly minimumPasswordAgeInput: string;
```

- *Type:* string

---

##### `minimumPasswordLengthInput`<sup>Optional</sup> <a name="minimumPasswordLengthInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput"></a>

```typescript
public readonly minimumPasswordLengthInput: string;
```

- *Type:* string

---

##### `passwordComplexityInput`<sup>Optional</sup> <a name="passwordComplexityInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput"></a>

```typescript
public readonly passwordComplexityInput: string;
```

- *Type:* string

---

##### `passwordHistorySizeInput`<sup>Optional</sup> <a name="passwordHistorySizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput"></a>

```typescript
public readonly passwordHistorySizeInput: string;
```

- *Type:* string

---

##### `clearTextPassword`<sup>Required</sup> <a name="clearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword"></a>

```typescript
public readonly clearTextPassword: string;
```

- *Type:* string

---

##### `maximumPasswordAge`<sup>Required</sup> <a name="maximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge"></a>

```typescript
public readonly maximumPasswordAge: string;
```

- *Type:* string

---

##### `minimumPasswordAge`<sup>Required</sup> <a name="minimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge"></a>

```typescript
public readonly minimumPasswordAge: string;
```

- *Type:* string

---

##### `minimumPasswordLength`<sup>Required</sup> <a name="minimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength"></a>

```typescript
public readonly minimumPasswordLength: string;
```

- *Type:* string

---

##### `passwordComplexity`<sup>Required</sup> <a name="passwordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity"></a>

```typescript
public readonly passwordComplexity: string;
```

- *Type:* string

---

##### `passwordHistorySize`<sup>Required</sup> <a name="passwordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize"></a>

```typescript
public readonly passwordHistorySize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityPasswordPolicies;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies

---


### GpoSecurityRegistryKeysList <a name="GpoSecurityRegistryKeysList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRegistryKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get"></a>

```typescript
public get(index: number): GpoSecurityRegistryKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRegistryKeys[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys[]

---


### GpoSecurityRegistryKeysOutputReference <a name="GpoSecurityRegistryKeysOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRegistryKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput">propagationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode">propagationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `propagationModeInput`<sup>Optional</sup> <a name="propagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput"></a>

```typescript
public readonly propagationModeInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `propagationMode`<sup>Required</sup> <a name="propagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode"></a>

```typescript
public readonly propagationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityRegistryKeys | IResolvable;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys | cdktf.IResolvable

---


### GpoSecurityRegistryValuesList <a name="GpoSecurityRegistryValuesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRegistryValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get"></a>

```typescript
public get(index: number): GpoSecurityRegistryValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRegistryValues[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues[]

---


### GpoSecurityRegistryValuesOutputReference <a name="GpoSecurityRegistryValuesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRegistryValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityRegistryValues | IResolvable;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues | cdktf.IResolvable

---


### GpoSecurityRestrictedGroupsList <a name="GpoSecurityRestrictedGroupsList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRestrictedGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get"></a>

```typescript
public get(index: number): GpoSecurityRestrictedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecurityRestrictedGroups[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups[]

---


### GpoSecurityRestrictedGroupsOutputReference <a name="GpoSecurityRestrictedGroupsOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecurityRestrictedGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput">groupMemberofInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput">groupMembersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof">groupMemberof</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers">groupMembers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupMemberofInput`<sup>Optional</sup> <a name="groupMemberofInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput"></a>

```typescript
public readonly groupMemberofInput: string;
```

- *Type:* string

---

##### `groupMembersInput`<sup>Optional</sup> <a name="groupMembersInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput"></a>

```typescript
public readonly groupMembersInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `groupMemberof`<sup>Required</sup> <a name="groupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof"></a>

```typescript
public readonly groupMemberof: string;
```

- *Type:* string

---

##### `groupMembers`<sup>Required</sup> <a name="groupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers"></a>

```typescript
public readonly groupMembers: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecurityRestrictedGroups | IResolvable;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups | cdktf.IResolvable

---


### GpoSecuritySystemLogOutputReference <a name="GpoSecuritySystemLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecuritySystemLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod">resetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize">resetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess">resetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogRetentionPeriod` <a name="resetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod"></a>

```typescript
public resetAuditLogRetentionPeriod(): void
```

##### `resetMaximumLogSize` <a name="resetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize"></a>

```typescript
public resetMaximumLogSize(): void
```

##### `resetRestrictGuestAccess` <a name="resetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess"></a>

```typescript
public resetRestrictGuestAccess(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput">auditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput">maximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput">restrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod">auditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize">maximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess">restrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays">retentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriodInput`<sup>Optional</sup> <a name="auditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```typescript
public readonly auditLogRetentionPeriodInput: string;
```

- *Type:* string

---

##### `maximumLogSizeInput`<sup>Optional</sup> <a name="maximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput"></a>

```typescript
public readonly maximumLogSizeInput: string;
```

- *Type:* string

---

##### `restrictGuestAccessInput`<sup>Optional</sup> <a name="restrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput"></a>

```typescript
public readonly restrictGuestAccessInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: string;
```

- *Type:* string

---

##### `auditLogRetentionPeriod`<sup>Required</sup> <a name="auditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod"></a>

```typescript
public readonly auditLogRetentionPeriod: string;
```

- *Type:* string

---

##### `maximumLogSize`<sup>Required</sup> <a name="maximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize"></a>

```typescript
public readonly maximumLogSize: string;
```

- *Type:* string

---

##### `restrictGuestAccess`<sup>Required</sup> <a name="restrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess"></a>

```typescript
public readonly restrictGuestAccess: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecuritySystemLog;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog

---


### GpoSecuritySystemServicesList <a name="GpoSecuritySystemServicesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecuritySystemServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get"></a>

```typescript
public get(index: number): GpoSecuritySystemServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GpoSecuritySystemServices[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices[]

---


### GpoSecuritySystemServicesOutputReference <a name="GpoSecuritySystemServicesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer"></a>

```typescript
import { gpoSecurity } from '@cdktf/provider-ad'

new gpoSecurity.GpoSecuritySystemServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput">startupModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode">startupMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `startupModeInput`<sup>Optional</sup> <a name="startupModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput"></a>

```typescript
public readonly startupModeInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `startupMode`<sup>Required</sup> <a name="startupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode"></a>

```typescript
public readonly startupMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GpoSecuritySystemServices | IResolvable;
```

- *Type:* @cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices | cdktf.IResolvable

---



