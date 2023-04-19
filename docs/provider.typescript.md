# `provider`

Refer to the Terraform Registory for docs: [`ad`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdProvider <a name="AdProvider" id="@cdktf/provider-ad.provider.AdProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs ad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.provider.AdProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-ad'

new provider.AdProvider(scope: Construct, id: string, config: AdProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig">AdProviderConfig</a></code> | *No description.* |

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

- *Type:* <a href="#@cdktf/provider-ad.provider.AdProviderConfig">AdProviderConfig</a>

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
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

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

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-ad'

provider.AdProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-ad'

provider.AdProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_hostname AdProvider#winrm_hostname}

---

##### `winrmPassword`<sup>Required</sup> <a name="winrmPassword" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword"></a>

```typescript
public readonly winrmPassword: string;
```

- *Type:* string

The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_password AdProvider#winrm_password}

---

##### `winrmUsername`<sup>Required</sup> <a name="winrmUsername" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername"></a>

```typescript
public readonly winrmUsername: string;
```

- *Type:* string

The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_username AdProvider#winrm_username}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#alias AdProvider#alias}

---

##### `domainController`<sup>Optional</sup> <a name="domainController" id="@cdktf/provider-ad.provider.AdProviderConfig.property.domainController"></a>

```typescript
public readonly domainController: string;
```

- *Type:* string

Use a specific domain controller. (default: none, environment variable: AD_DC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#domain_controller AdProvider#domain_controller}

---

##### `krbConf`<sup>Optional</sup> <a name="krbConf" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf"></a>

```typescript
public readonly krbConf: string;
```

- *Type:* string

Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_conf AdProvider#krb_conf}

---

##### `krbKeytab`<sup>Optional</sup> <a name="krbKeytab" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab"></a>

```typescript
public readonly krbKeytab: string;
```

- *Type:* string

Path to a keytab file to be used instead of a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_keytab AdProvider#krb_keytab}

---

##### `krbRealm`<sup>Optional</sup> <a name="krbRealm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm"></a>

```typescript
public readonly krbRealm: string;
```

- *Type:* string

The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_realm AdProvider#krb_realm}

---

##### `krbSpn`<sup>Optional</sup> <a name="krbSpn" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn"></a>

```typescript
public readonly krbSpn: string;
```

- *Type:* string

Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_spn AdProvider#krb_spn}

---

##### `winrmInsecure`<sup>Optional</sup> <a name="winrmInsecure" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure"></a>

```typescript
public readonly winrmInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_insecure AdProvider#winrm_insecure}

---

##### `winrmPassCredentials`<sup>Optional</sup> <a name="winrmPassCredentials" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials"></a>

```typescript
public readonly winrmPassCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_pass_credentials AdProvider#winrm_pass_credentials}

---

##### `winrmPort`<sup>Optional</sup> <a name="winrmPort" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort"></a>

```typescript
public readonly winrmPort: number;
```

- *Type:* number

The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_port AdProvider#winrm_port}

---

##### `winrmProto`<sup>Optional</sup> <a name="winrmProto" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto"></a>

```typescript
public readonly winrmProto: string;
```

- *Type:* string

The WinRM protocol we will use. (default: http, environment variable: AD_PROTO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_proto AdProvider#winrm_proto}

---

##### `winrmUseNtlm`<sup>Optional</sup> <a name="winrmUseNtlm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm"></a>

```typescript
public readonly winrmUseNtlm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_use_ntlm AdProvider#winrm_use_ntlm}

---



