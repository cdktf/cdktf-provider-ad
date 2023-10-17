# `provider`

Refer to the Terraform Registory for docs: [`ad`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdProvider <a name="AdProvider" id="@cdktf/provider-ad.provider.AdProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs ad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.provider.AdProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new AdProvider(Construct Scope, string Id, AdProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig">AdProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.provider.AdProviderConfig">AdProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetDomainController">ResetDomainController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbConf">ResetKrbConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab">ResetKrbKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbRealm">ResetKrbRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbSpn">ResetKrbSpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure">ResetWinrmInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials">ResetWinrmPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmPort">ResetWinrmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmProto">ResetWinrmProto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm">ResetWinrmUseNtlm</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.provider.AdProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.provider.AdProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.provider.AdProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.provider.AdProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-ad.provider.AdProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetDomainController` <a name="ResetDomainController" id="@cdktf/provider-ad.provider.AdProvider.resetDomainController"></a>

```csharp
private void ResetDomainController()
```

##### `ResetKrbConf` <a name="ResetKrbConf" id="@cdktf/provider-ad.provider.AdProvider.resetKrbConf"></a>

```csharp
private void ResetKrbConf()
```

##### `ResetKrbKeytab` <a name="ResetKrbKeytab" id="@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab"></a>

```csharp
private void ResetKrbKeytab()
```

##### `ResetKrbRealm` <a name="ResetKrbRealm" id="@cdktf/provider-ad.provider.AdProvider.resetKrbRealm"></a>

```csharp
private void ResetKrbRealm()
```

##### `ResetKrbSpn` <a name="ResetKrbSpn" id="@cdktf/provider-ad.provider.AdProvider.resetKrbSpn"></a>

```csharp
private void ResetKrbSpn()
```

##### `ResetWinrmInsecure` <a name="ResetWinrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure"></a>

```csharp
private void ResetWinrmInsecure()
```

##### `ResetWinrmPassCredentials` <a name="ResetWinrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials"></a>

```csharp
private void ResetWinrmPassCredentials()
```

##### `ResetWinrmPort` <a name="ResetWinrmPort" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPort"></a>

```csharp
private void ResetWinrmPort()
```

##### `ResetWinrmProto` <a name="ResetWinrmProto" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmProto"></a>

```csharp
private void ResetWinrmProto()
```

##### `ResetWinrmUseNtlm` <a name="ResetWinrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm"></a>

```csharp
private void ResetWinrmUseNtlm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AdProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ad.provider.AdProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

AdProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.provider.AdProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

AdProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

AdProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

AdProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AdProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AdProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput">DomainControllerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConfInput">KrbConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput">KrbKeytabInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput">KrbRealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput">KrbSpnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput">WinrmHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput">WinrmInsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput">WinrmPassCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput">WinrmPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput">WinrmPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput">WinrmProtoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput">WinrmUseNtlmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput">WinrmUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainController">DomainController</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConf">KrbConf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytab">KrbKeytab</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealm">KrbRealm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpn">KrbSpn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostname">WinrmHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure">WinrmInsecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials">WinrmPassCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassword">WinrmPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPort">WinrmPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProto">WinrmProto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm">WinrmUseNtlm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsername">WinrmUsername</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.provider.AdProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.provider.AdProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.provider.AdProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-ad.provider.AdProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ad.provider.AdProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-ad.provider.AdProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DomainControllerInput`<sup>Optional</sup> <a name="DomainControllerInput" id="@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput"></a>

```csharp
public string DomainControllerInput { get; }
```

- *Type:* string

---

##### `KrbConfInput`<sup>Optional</sup> <a name="KrbConfInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbConfInput"></a>

```csharp
public string KrbConfInput { get; }
```

- *Type:* string

---

##### `KrbKeytabInput`<sup>Optional</sup> <a name="KrbKeytabInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput"></a>

```csharp
public string KrbKeytabInput { get; }
```

- *Type:* string

---

##### `KrbRealmInput`<sup>Optional</sup> <a name="KrbRealmInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput"></a>

```csharp
public string KrbRealmInput { get; }
```

- *Type:* string

---

##### `KrbSpnInput`<sup>Optional</sup> <a name="KrbSpnInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput"></a>

```csharp
public string KrbSpnInput { get; }
```

- *Type:* string

---

##### `WinrmHostnameInput`<sup>Optional</sup> <a name="WinrmHostnameInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput"></a>

```csharp
public string WinrmHostnameInput { get; }
```

- *Type:* string

---

##### `WinrmInsecureInput`<sup>Optional</sup> <a name="WinrmInsecureInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput"></a>

```csharp
public object WinrmInsecureInput { get; }
```

- *Type:* object

---

##### `WinrmPassCredentialsInput`<sup>Optional</sup> <a name="WinrmPassCredentialsInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput"></a>

```csharp
public object WinrmPassCredentialsInput { get; }
```

- *Type:* object

---

##### `WinrmPasswordInput`<sup>Optional</sup> <a name="WinrmPasswordInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput"></a>

```csharp
public string WinrmPasswordInput { get; }
```

- *Type:* string

---

##### `WinrmPortInput`<sup>Optional</sup> <a name="WinrmPortInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput"></a>

```csharp
public double WinrmPortInput { get; }
```

- *Type:* double

---

##### `WinrmProtoInput`<sup>Optional</sup> <a name="WinrmProtoInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput"></a>

```csharp
public string WinrmProtoInput { get; }
```

- *Type:* string

---

##### `WinrmUseNtlmInput`<sup>Optional</sup> <a name="WinrmUseNtlmInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput"></a>

```csharp
public object WinrmUseNtlmInput { get; }
```

- *Type:* object

---

##### `WinrmUsernameInput`<sup>Optional</sup> <a name="WinrmUsernameInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput"></a>

```csharp
public string WinrmUsernameInput { get; }
```

- *Type:* string

---

##### `DomainController`<sup>Optional</sup> <a name="DomainController" id="@cdktf/provider-ad.provider.AdProvider.property.domainController"></a>

```csharp
public string DomainController { get; }
```

- *Type:* string

---

##### `KrbConf`<sup>Optional</sup> <a name="KrbConf" id="@cdktf/provider-ad.provider.AdProvider.property.krbConf"></a>

```csharp
public string KrbConf { get; }
```

- *Type:* string

---

##### `KrbKeytab`<sup>Optional</sup> <a name="KrbKeytab" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytab"></a>

```csharp
public string KrbKeytab { get; }
```

- *Type:* string

---

##### `KrbRealm`<sup>Optional</sup> <a name="KrbRealm" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealm"></a>

```csharp
public string KrbRealm { get; }
```

- *Type:* string

---

##### `KrbSpn`<sup>Optional</sup> <a name="KrbSpn" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpn"></a>

```csharp
public string KrbSpn { get; }
```

- *Type:* string

---

##### `WinrmHostname`<sup>Optional</sup> <a name="WinrmHostname" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostname"></a>

```csharp
public string WinrmHostname { get; }
```

- *Type:* string

---

##### `WinrmInsecure`<sup>Optional</sup> <a name="WinrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure"></a>

```csharp
public object WinrmInsecure { get; }
```

- *Type:* object

---

##### `WinrmPassCredentials`<sup>Optional</sup> <a name="WinrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials"></a>

```csharp
public object WinrmPassCredentials { get; }
```

- *Type:* object

---

##### `WinrmPassword`<sup>Optional</sup> <a name="WinrmPassword" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassword"></a>

```csharp
public string WinrmPassword { get; }
```

- *Type:* string

---

##### `WinrmPort`<sup>Optional</sup> <a name="WinrmPort" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPort"></a>

```csharp
public double WinrmPort { get; }
```

- *Type:* double

---

##### `WinrmProto`<sup>Optional</sup> <a name="WinrmProto" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProto"></a>

```csharp
public string WinrmProto { get; }
```

- *Type:* string

---

##### `WinrmUseNtlm`<sup>Optional</sup> <a name="WinrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm"></a>

```csharp
public object WinrmUseNtlm { get; }
```

- *Type:* object

---

##### `WinrmUsername`<sup>Optional</sup> <a name="WinrmUsername" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsername"></a>

```csharp
public string WinrmUsername { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdProviderConfig <a name="AdProviderConfig" id="@cdktf/provider-ad.provider.AdProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.provider.AdProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new AdProviderConfig {
    string WinrmHostname,
    string WinrmPassword,
    string WinrmUsername,
    string Alias = null,
    string DomainController = null,
    string KrbConf = null,
    string KrbKeytab = null,
    string KrbRealm = null,
    string KrbSpn = null,
    object WinrmInsecure = null,
    object WinrmPassCredentials = null,
    double WinrmPort = null,
    string WinrmProto = null,
    object WinrmUseNtlm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname">WinrmHostname</a></code> | <code>string</code> | The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword">WinrmPassword</a></code> | <code>string</code> | The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername">WinrmUsername</a></code> | <code>string</code> | The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.domainController">DomainController</a></code> | <code>string</code> | Use a specific domain controller. (default: none, environment variable: AD_DC). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf">KrbConf</a></code> | <code>string</code> | Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab">KrbKeytab</a></code> | <code>string</code> | Path to a keytab file to be used instead of a password. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm">KrbRealm</a></code> | <code>string</code> | The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn">KrbSpn</a></code> | <code>string</code> | Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure">WinrmInsecure</a></code> | <code>object</code> | Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials">WinrmPassCredentials</a></code> | <code>object</code> | Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort">WinrmPort</a></code> | <code>double</code> | The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto">WinrmProto</a></code> | <code>string</code> | The WinRM protocol we will use. (default: http, environment variable: AD_PROTO). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm">WinrmUseNtlm</a></code> | <code>object</code> | Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM). |

---

##### `WinrmHostname`<sup>Required</sup> <a name="WinrmHostname" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname"></a>

```csharp
public string WinrmHostname { get; set; }
```

- *Type:* string

The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_hostname AdProvider#winrm_hostname}

---

##### `WinrmPassword`<sup>Required</sup> <a name="WinrmPassword" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword"></a>

```csharp
public string WinrmPassword { get; set; }
```

- *Type:* string

The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_password AdProvider#winrm_password}

---

##### `WinrmUsername`<sup>Required</sup> <a name="WinrmUsername" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername"></a>

```csharp
public string WinrmUsername { get; set; }
```

- *Type:* string

The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_username AdProvider#winrm_username}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ad.provider.AdProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#alias AdProvider#alias}

---

##### `DomainController`<sup>Optional</sup> <a name="DomainController" id="@cdktf/provider-ad.provider.AdProviderConfig.property.domainController"></a>

```csharp
public string DomainController { get; set; }
```

- *Type:* string

Use a specific domain controller. (default: none, environment variable: AD_DC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#domain_controller AdProvider#domain_controller}

---

##### `KrbConf`<sup>Optional</sup> <a name="KrbConf" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf"></a>

```csharp
public string KrbConf { get; set; }
```

- *Type:* string

Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_conf AdProvider#krb_conf}

---

##### `KrbKeytab`<sup>Optional</sup> <a name="KrbKeytab" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab"></a>

```csharp
public string KrbKeytab { get; set; }
```

- *Type:* string

Path to a keytab file to be used instead of a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_keytab AdProvider#krb_keytab}

---

##### `KrbRealm`<sup>Optional</sup> <a name="KrbRealm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm"></a>

```csharp
public string KrbRealm { get; set; }
```

- *Type:* string

The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_realm AdProvider#krb_realm}

---

##### `KrbSpn`<sup>Optional</sup> <a name="KrbSpn" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn"></a>

```csharp
public string KrbSpn { get; set; }
```

- *Type:* string

Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_spn AdProvider#krb_spn}

---

##### `WinrmInsecure`<sup>Optional</sup> <a name="WinrmInsecure" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure"></a>

```csharp
public object WinrmInsecure { get; set; }
```

- *Type:* object

Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_insecure AdProvider#winrm_insecure}

---

##### `WinrmPassCredentials`<sup>Optional</sup> <a name="WinrmPassCredentials" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials"></a>

```csharp
public object WinrmPassCredentials { get; set; }
```

- *Type:* object

Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_pass_credentials AdProvider#winrm_pass_credentials}

---

##### `WinrmPort`<sup>Optional</sup> <a name="WinrmPort" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort"></a>

```csharp
public double WinrmPort { get; set; }
```

- *Type:* double

The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_port AdProvider#winrm_port}

---

##### `WinrmProto`<sup>Optional</sup> <a name="WinrmProto" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto"></a>

```csharp
public string WinrmProto { get; set; }
```

- *Type:* string

The WinRM protocol we will use. (default: http, environment variable: AD_PROTO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_proto AdProvider#winrm_proto}

---

##### `WinrmUseNtlm`<sup>Optional</sup> <a name="WinrmUseNtlm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm"></a>

```csharp
public object WinrmUseNtlm { get; set; }
```

- *Type:* object

Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_use_ntlm AdProvider#winrm_use_ntlm}

---



