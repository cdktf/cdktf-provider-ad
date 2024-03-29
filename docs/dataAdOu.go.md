# `dataAdOu` Submodule <a name="`dataAdOu` Submodule" id="@cdktf/provider-ad.dataAdOu"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAdOu <a name="DataAdOu" id="@cdktf/provider-ad.dataAdOu.DataAdOu"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou ad_ou}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v8/dataadou"

dataadou.NewDataAdOu(scope Construct, id *string, config DataAdOuConfig) DataAdOu
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig">DataAdOuConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig">DataAdOuConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetDn">ResetDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetOuId">ResetOuId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDn` <a name="ResetDn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetDn"></a>

```go
func ResetDn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetName"></a>

```go
func ResetName()
```

##### `ResetOuId` <a name="ResetOuId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetOuId"></a>

```go
func ResetOuId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetPath"></a>

```go
func ResetPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAdOu resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v8/dataadou"

dataadou.DataAdOu_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v8/dataadou"

dataadou.DataAdOu_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v8/dataadou"

dataadou.DataAdOu_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ad.dataAdOu.DataAdOu.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v8/dataadou"

dataadou.DataAdOu_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAdOu resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdOu.DataAdOu.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAdOu to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAdOu that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdOu.DataAdOu.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAdOu to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.protected">Protected</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dnInput">DnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouIdInput">OuIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dn">Dn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouId">OuId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.path">Path</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.protected"></a>

```go
func Protected() *string
```

- *Type:* *string

---

##### `DnInput`<sup>Optional</sup> <a name="DnInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dnInput"></a>

```go
func DnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OuIdInput`<sup>Optional</sup> <a name="OuIdInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouIdInput"></a>

```go
func OuIdInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dn"></a>

```go
func Dn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OuId`<sup>Required</sup> <a name="OuId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouId"></a>

```go
func OuId() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAdOuConfig <a name="DataAdOuConfig" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v8/dataadou"

&dataadou.DataAdOuConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Dn: *string,
	Id: *string,
	Name: *string,
	OuId: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dn">Dn</a></code> | <code>*string</code> | Distinguished Name of the OU object. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#id DataAdOu#id}. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.name">Name</a></code> | <code>*string</code> | Name of the OU object. If this is used then the `path` attribute needs to be set as well. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.ouId">OuId</a></code> | <code>*string</code> | The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.path">Path</a></code> | <code>*string</code> | Path of the OU object. If this is used then the `Name` attribute needs to be set as well. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dn`<sup>Optional</sup> <a name="Dn" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dn"></a>

```go
Dn *string
```

- *Type:* *string

Distinguished Name of the OU object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#dn DataAdOu#dn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#id DataAdOu#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the OU object. If this is used then the `path` attribute needs to be set as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#name DataAdOu#name}

---

##### `OuId`<sup>Optional</sup> <a name="OuId" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.ouId"></a>

```go
OuId *string
```

- *Type:* *string

The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#ou_id DataAdOu#ou_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path of the OU object. If this is used then the `Name` attribute needs to be set as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#path DataAdOu#path}

---



