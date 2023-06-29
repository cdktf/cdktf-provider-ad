# `provider`

Refer to the Terraform Registory for docs: [`ad`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdProvider <a name="AdProvider" id="@cdktf/provider-ad.provider.AdProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs ad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.provider.AdProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/provider"

provider.NewAdProvider(scope Construct, id *string, config AdProviderConfig) AdProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig">AdProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.provider.AdProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.provider.AdProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.provider.AdProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-ad.provider.AdProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetDomainController` <a name="ResetDomainController" id="@cdktf/provider-ad.provider.AdProvider.resetDomainController"></a>

```go
func ResetDomainController()
```

##### `ResetKrbConf` <a name="ResetKrbConf" id="@cdktf/provider-ad.provider.AdProvider.resetKrbConf"></a>

```go
func ResetKrbConf()
```

##### `ResetKrbKeytab` <a name="ResetKrbKeytab" id="@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab"></a>

```go
func ResetKrbKeytab()
```

##### `ResetKrbRealm` <a name="ResetKrbRealm" id="@cdktf/provider-ad.provider.AdProvider.resetKrbRealm"></a>

```go
func ResetKrbRealm()
```

##### `ResetKrbSpn` <a name="ResetKrbSpn" id="@cdktf/provider-ad.provider.AdProvider.resetKrbSpn"></a>

```go
func ResetKrbSpn()
```

##### `ResetWinrmInsecure` <a name="ResetWinrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure"></a>

```go
func ResetWinrmInsecure()
```

##### `ResetWinrmPassCredentials` <a name="ResetWinrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials"></a>

```go
func ResetWinrmPassCredentials()
```

##### `ResetWinrmPort` <a name="ResetWinrmPort" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPort"></a>

```go
func ResetWinrmPort()
```

##### `ResetWinrmProto` <a name="ResetWinrmProto" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmProto"></a>

```go
func ResetWinrmProto()
```

##### `ResetWinrmUseNtlm` <a name="ResetWinrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm"></a>

```go
func ResetWinrmUseNtlm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ad.provider.AdProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/provider"

provider.AdProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/provider"

provider.AdProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/provider"

provider.AdProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput">DomainControllerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConfInput">KrbConfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput">KrbKeytabInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput">KrbRealmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput">KrbSpnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput">WinrmHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput">WinrmInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput">WinrmPassCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput">WinrmPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput">WinrmPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput">WinrmProtoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput">WinrmUseNtlmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput">WinrmUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainController">DomainController</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConf">KrbConf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytab">KrbKeytab</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealm">KrbRealm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpn">KrbSpn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostname">WinrmHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure">WinrmInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials">WinrmPassCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassword">WinrmPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPort">WinrmPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProto">WinrmProto</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm">WinrmUseNtlm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsername">WinrmUsername</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.provider.AdProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.provider.AdProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.provider.AdProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-ad.provider.AdProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ad.provider.AdProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-ad.provider.AdProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DomainControllerInput`<sup>Optional</sup> <a name="DomainControllerInput" id="@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput"></a>

```go
func DomainControllerInput() *string
```

- *Type:* *string

---

##### `KrbConfInput`<sup>Optional</sup> <a name="KrbConfInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbConfInput"></a>

```go
func KrbConfInput() *string
```

- *Type:* *string

---

##### `KrbKeytabInput`<sup>Optional</sup> <a name="KrbKeytabInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput"></a>

```go
func KrbKeytabInput() *string
```

- *Type:* *string

---

##### `KrbRealmInput`<sup>Optional</sup> <a name="KrbRealmInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput"></a>

```go
func KrbRealmInput() *string
```

- *Type:* *string

---

##### `KrbSpnInput`<sup>Optional</sup> <a name="KrbSpnInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput"></a>

```go
func KrbSpnInput() *string
```

- *Type:* *string

---

##### `WinrmHostnameInput`<sup>Optional</sup> <a name="WinrmHostnameInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput"></a>

```go
func WinrmHostnameInput() *string
```

- *Type:* *string

---

##### `WinrmInsecureInput`<sup>Optional</sup> <a name="WinrmInsecureInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput"></a>

```go
func WinrmInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `WinrmPassCredentialsInput`<sup>Optional</sup> <a name="WinrmPassCredentialsInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput"></a>

```go
func WinrmPassCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `WinrmPasswordInput`<sup>Optional</sup> <a name="WinrmPasswordInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput"></a>

```go
func WinrmPasswordInput() *string
```

- *Type:* *string

---

##### `WinrmPortInput`<sup>Optional</sup> <a name="WinrmPortInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput"></a>

```go
func WinrmPortInput() *f64
```

- *Type:* *f64

---

##### `WinrmProtoInput`<sup>Optional</sup> <a name="WinrmProtoInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput"></a>

```go
func WinrmProtoInput() *string
```

- *Type:* *string

---

##### `WinrmUseNtlmInput`<sup>Optional</sup> <a name="WinrmUseNtlmInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput"></a>

```go
func WinrmUseNtlmInput() interface{}
```

- *Type:* interface{}

---

##### `WinrmUsernameInput`<sup>Optional</sup> <a name="WinrmUsernameInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput"></a>

```go
func WinrmUsernameInput() *string
```

- *Type:* *string

---

##### `DomainController`<sup>Optional</sup> <a name="DomainController" id="@cdktf/provider-ad.provider.AdProvider.property.domainController"></a>

```go
func DomainController() *string
```

- *Type:* *string

---

##### `KrbConf`<sup>Optional</sup> <a name="KrbConf" id="@cdktf/provider-ad.provider.AdProvider.property.krbConf"></a>

```go
func KrbConf() *string
```

- *Type:* *string

---

##### `KrbKeytab`<sup>Optional</sup> <a name="KrbKeytab" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytab"></a>

```go
func KrbKeytab() *string
```

- *Type:* *string

---

##### `KrbRealm`<sup>Optional</sup> <a name="KrbRealm" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealm"></a>

```go
func KrbRealm() *string
```

- *Type:* *string

---

##### `KrbSpn`<sup>Optional</sup> <a name="KrbSpn" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpn"></a>

```go
func KrbSpn() *string
```

- *Type:* *string

---

##### `WinrmHostname`<sup>Optional</sup> <a name="WinrmHostname" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostname"></a>

```go
func WinrmHostname() *string
```

- *Type:* *string

---

##### `WinrmInsecure`<sup>Optional</sup> <a name="WinrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure"></a>

```go
func WinrmInsecure() interface{}
```

- *Type:* interface{}

---

##### `WinrmPassCredentials`<sup>Optional</sup> <a name="WinrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials"></a>

```go
func WinrmPassCredentials() interface{}
```

- *Type:* interface{}

---

##### `WinrmPassword`<sup>Optional</sup> <a name="WinrmPassword" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassword"></a>

```go
func WinrmPassword() *string
```

- *Type:* *string

---

##### `WinrmPort`<sup>Optional</sup> <a name="WinrmPort" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPort"></a>

```go
func WinrmPort() *f64
```

- *Type:* *f64

---

##### `WinrmProto`<sup>Optional</sup> <a name="WinrmProto" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProto"></a>

```go
func WinrmProto() *string
```

- *Type:* *string

---

##### `WinrmUseNtlm`<sup>Optional</sup> <a name="WinrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm"></a>

```go
func WinrmUseNtlm() interface{}
```

- *Type:* interface{}

---

##### `WinrmUsername`<sup>Optional</sup> <a name="WinrmUsername" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsername"></a>

```go
func WinrmUsername() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AdProviderConfig <a name="AdProviderConfig" id="@cdktf/provider-ad.provider.AdProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.provider.AdProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/provider"

&provider.AdProviderConfig {
	WinrmHostname: *string,
	WinrmPassword: *string,
	WinrmUsername: *string,
	Alias: *string,
	DomainController: *string,
	KrbConf: *string,
	KrbKeytab: *string,
	KrbRealm: *string,
	KrbSpn: *string,
	WinrmInsecure: interface{},
	WinrmPassCredentials: interface{},
	WinrmPort: *f64,
	WinrmProto: *string,
	WinrmUseNtlm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname">WinrmHostname</a></code> | <code>*string</code> | The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword">WinrmPassword</a></code> | <code>*string</code> | The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername">WinrmUsername</a></code> | <code>*string</code> | The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.domainController">DomainController</a></code> | <code>*string</code> | Use a specific domain controller. (default: none, environment variable: AD_DC). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf">KrbConf</a></code> | <code>*string</code> | Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab">KrbKeytab</a></code> | <code>*string</code> | Path to a keytab file to be used instead of a password. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm">KrbRealm</a></code> | <code>*string</code> | The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn">KrbSpn</a></code> | <code>*string</code> | Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure">WinrmInsecure</a></code> | <code>interface{}</code> | Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials">WinrmPassCredentials</a></code> | <code>interface{}</code> | Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort">WinrmPort</a></code> | <code>*f64</code> | The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto">WinrmProto</a></code> | <code>*string</code> | The WinRM protocol we will use. (default: http, environment variable: AD_PROTO). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm">WinrmUseNtlm</a></code> | <code>interface{}</code> | Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM). |

---

##### `WinrmHostname`<sup>Required</sup> <a name="WinrmHostname" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname"></a>

```go
WinrmHostname *string
```

- *Type:* *string

The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_hostname AdProvider#winrm_hostname}

---

##### `WinrmPassword`<sup>Required</sup> <a name="WinrmPassword" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword"></a>

```go
WinrmPassword *string
```

- *Type:* *string

The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_password AdProvider#winrm_password}

---

##### `WinrmUsername`<sup>Required</sup> <a name="WinrmUsername" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername"></a>

```go
WinrmUsername *string
```

- *Type:* *string

The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_username AdProvider#winrm_username}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ad.provider.AdProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#alias AdProvider#alias}

---

##### `DomainController`<sup>Optional</sup> <a name="DomainController" id="@cdktf/provider-ad.provider.AdProviderConfig.property.domainController"></a>

```go
DomainController *string
```

- *Type:* *string

Use a specific domain controller. (default: none, environment variable: AD_DC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#domain_controller AdProvider#domain_controller}

---

##### `KrbConf`<sup>Optional</sup> <a name="KrbConf" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf"></a>

```go
KrbConf *string
```

- *Type:* *string

Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_conf AdProvider#krb_conf}

---

##### `KrbKeytab`<sup>Optional</sup> <a name="KrbKeytab" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab"></a>

```go
KrbKeytab *string
```

- *Type:* *string

Path to a keytab file to be used instead of a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_keytab AdProvider#krb_keytab}

---

##### `KrbRealm`<sup>Optional</sup> <a name="KrbRealm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm"></a>

```go
KrbRealm *string
```

- *Type:* *string

The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_realm AdProvider#krb_realm}

---

##### `KrbSpn`<sup>Optional</sup> <a name="KrbSpn" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn"></a>

```go
KrbSpn *string
```

- *Type:* *string

Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_spn AdProvider#krb_spn}

---

##### `WinrmInsecure`<sup>Optional</sup> <a name="WinrmInsecure" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure"></a>

```go
WinrmInsecure interface{}
```

- *Type:* interface{}

Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_insecure AdProvider#winrm_insecure}

---

##### `WinrmPassCredentials`<sup>Optional</sup> <a name="WinrmPassCredentials" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials"></a>

```go
WinrmPassCredentials interface{}
```

- *Type:* interface{}

Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_pass_credentials AdProvider#winrm_pass_credentials}

---

##### `WinrmPort`<sup>Optional</sup> <a name="WinrmPort" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort"></a>

```go
WinrmPort *f64
```

- *Type:* *f64

The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_port AdProvider#winrm_port}

---

##### `WinrmProto`<sup>Optional</sup> <a name="WinrmProto" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto"></a>

```go
WinrmProto *string
```

- *Type:* *string

The WinRM protocol we will use. (default: http, environment variable: AD_PROTO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_proto AdProvider#winrm_proto}

---

##### `WinrmUseNtlm`<sup>Optional</sup> <a name="WinrmUseNtlm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm"></a>

```go
WinrmUseNtlm interface{}
```

- *Type:* interface{}

Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_use_ntlm AdProvider#winrm_use_ntlm}

---



