# `data_ad_user`

Refer to the Terraform Registory for docs: [`data_ad_user`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user).

# `dataAdUser` Submodule <a name="`dataAdUser` Submodule" id="@cdktf/provider-ad.dataAdUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAdUser <a name="DataAdUser" id="@cdktf/provider-ad.dataAdUser.DataAdUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user ad_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataaduser"

dataaduser.NewDataAdUser(scope Construct, id *string, config DataAdUserConfig) DataAdUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig">DataAdUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig">DataAdUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataaduser"

dataaduser.DataAdUser_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataaduser"

dataaduser.DataAdUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataaduser"

dataaduser.DataAdUser_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.company">Company</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.department">Department</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.division">Division</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.dn">Dn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeId">EmployeeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeNumber">EmployeeNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDirectory">HomeDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDrive">HomeDrive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePage">HomePage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePhone">HomePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.mobilePhone">MobilePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.office">Office</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.officePhone">OfficePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.otherName">OtherName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.poBox">PoBox</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.principalName">PrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.samAccountName">SamAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.smartCardLogonRequired">SmartCardLogonRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.trustedForDelegation">TrustedForDelegation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Company`<sup>Required</sup> <a name="Company" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.company"></a>

```go
func Company() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.department"></a>

```go
func Department() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.division"></a>

```go
func Division() *string
```

- *Type:* *string

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.dn"></a>

```go
func Dn() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `EmployeeId`<sup>Required</sup> <a name="EmployeeId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeId"></a>

```go
func EmployeeId() *string
```

- *Type:* *string

---

##### `EmployeeNumber`<sup>Required</sup> <a name="EmployeeNumber" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeNumber"></a>

```go
func EmployeeNumber() *string
```

- *Type:* *string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDirectory"></a>

```go
func HomeDirectory() *string
```

- *Type:* *string

---

##### `HomeDrive`<sup>Required</sup> <a name="HomeDrive" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDrive"></a>

```go
func HomeDrive() *string
```

- *Type:* *string

---

##### `HomePage`<sup>Required</sup> <a name="HomePage" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePage"></a>

```go
func HomePage() *string
```

- *Type:* *string

---

##### `HomePhone`<sup>Required</sup> <a name="HomePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePhone"></a>

```go
func HomePhone() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.mobilePhone"></a>

```go
func MobilePhone() *string
```

- *Type:* *string

---

##### `Office`<sup>Required</sup> <a name="Office" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.office"></a>

```go
func Office() *string
```

- *Type:* *string

---

##### `OfficePhone`<sup>Required</sup> <a name="OfficePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.officePhone"></a>

```go
func OfficePhone() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OtherName`<sup>Required</sup> <a name="OtherName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.otherName"></a>

```go
func OtherName() *string
```

- *Type:* *string

---

##### `PoBox`<sup>Required</sup> <a name="PoBox" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.poBox"></a>

```go
func PoBox() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.principalName"></a>

```go
func PrincipalName() *string
```

- *Type:* *string

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.samAccountName"></a>

```go
func SamAccountName() *string
```

- *Type:* *string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `SmartCardLogonRequired`<sup>Required</sup> <a name="SmartCardLogonRequired" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.smartCardLogonRequired"></a>

```go
func SmartCardLogonRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `TrustedForDelegation`<sup>Required</sup> <a name="TrustedForDelegation" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.trustedForDelegation"></a>

```go
func TrustedForDelegation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAdUserConfig <a name="DataAdUserConfig" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/v6/dataaduser"

&dataaduser.DataAdUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.userId">UserId</a></code> | <code>*string</code> | The user's identifier. It can be the group's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user#id DataAdUser#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

The user's identifier. It can be the group's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user#user_id DataAdUser#user_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user#id DataAdUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



