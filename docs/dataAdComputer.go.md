# `data_ad_computer`

Refer to the Terraform Registory for docs: [`data_ad_computer`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/computer).

# `dataAdComputer` Submodule <a name="`dataAdComputer` Submodule" id="@cdktf/provider-ad.dataAdComputer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAdComputer <a name="DataAdComputer" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/computer ad_computer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataadcomputer"

dataadcomputer.NewDataAdComputer(scope Construct, id *string, config DataAdComputerConfig) DataAdComputer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig">DataAdComputerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig">DataAdComputerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetComputerId">ResetComputerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetDn">ResetDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetGuid">ResetGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetComputerId` <a name="ResetComputerId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetComputerId"></a>

```go
func ResetComputerId()
```

##### `ResetDn` <a name="ResetDn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetDn"></a>

```go
func ResetDn()
```

##### `ResetGuid` <a name="ResetGuid" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetGuid"></a>

```go
func ResetGuid()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataadcomputer"

dataadcomputer.DataAdComputer_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataadcomputer"

dataadcomputer.DataAdComputer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataadcomputer"

dataadcomputer.DataAdComputer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.computerIdInput">ComputerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dnInput">DnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.guidInput">GuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.computerId">ComputerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dn">Dn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `ComputerIdInput`<sup>Optional</sup> <a name="ComputerIdInput" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.computerIdInput"></a>

```go
func ComputerIdInput() *string
```

- *Type:* *string

---

##### `DnInput`<sup>Optional</sup> <a name="DnInput" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dnInput"></a>

```go
func DnInput() *string
```

- *Type:* *string

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.guidInput"></a>

```go
func GuidInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ComputerId`<sup>Required</sup> <a name="ComputerId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.computerId"></a>

```go
func ComputerId() *string
```

- *Type:* *string

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.dn"></a>

```go
func Dn() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.dataAdComputer.DataAdComputer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAdComputerConfig <a name="DataAdComputerConfig" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataadcomputer"

&dataadcomputer.DataAdComputerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComputerId: *string,
	Dn: *string,
	Guid: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.computerId">ComputerId</a></code> | <code>*string</code> | The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.dn">Dn</a></code> | <code>*string</code> | The Distinguished Name of the computer object. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.guid">Guid</a></code> | <code>*string</code> | The GUID of the computer object. |
| <code><a href="#@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/computer#id DataAdComputer#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputerId`<sup>Optional</sup> <a name="ComputerId" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.computerId"></a>

```go
ComputerId *string
```

- *Type:* *string

The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/computer#computer_id DataAdComputer#computer_id}

---

##### `Dn`<sup>Optional</sup> <a name="Dn" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.dn"></a>

```go
Dn *string
```

- *Type:* *string

The Distinguished Name of the computer object.

This field is deprecated in favour of `computer_id`. In the future this field will be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/computer#dn DataAdComputer#dn}

---

##### `Guid`<sup>Optional</sup> <a name="Guid" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.guid"></a>

```go
Guid *string
```

- *Type:* *string

The GUID of the computer object.

This field is deprecated in favour of `computer_id`. In the future this field will be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/computer#guid DataAdComputer#guid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ad.dataAdComputer.DataAdComputerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/computer#id DataAdComputer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



