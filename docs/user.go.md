# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-ad.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-ad.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user ad_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.user.User.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/user"

user.NewUser(scope Construct, id *string, config UserConfig) User
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.user.User.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.user.User.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.user.User.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.user.User.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ad.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ad.user.User.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ad.user.User.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ad.user.User.resetCannotChangePassword">ResetCannotChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCompany">ResetCompany</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDepartment">ResetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDivision">ResetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmployeeId">ResetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmployeeNumber">ResetEmployeeNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomeDirectory">ResetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomeDrive">ResetHomeDrive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomePage">ResetHomePage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomePhone">ResetHomePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetInitialPassword">ResetInitialPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetInitials">ResetInitials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetMobilePhone">ResetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOffice">ResetOffice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOfficePhone">ResetOfficePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOtherName">ResetOtherName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPasswordNeverExpires">ResetPasswordNeverExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPoBox">ResetPoBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetSmartCardLogonRequired">ResetSmartCardLogonRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetSurname">ResetSurname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetTrustedForDelegation">ResetTrustedForDelegation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.user.User.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.user.User.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.user.User.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.user.User.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.user.User.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.user.User.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ad.user.User.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.user.User.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.user.User.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ad.user.User.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.user.User.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.user.User.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.user.User.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ad.user.User.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ad.user.User.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ad.user.User.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ad.user.User.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ad.user.User.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ad.user.User.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCannotChangePassword` <a name="ResetCannotChangePassword" id="@cdktf/provider-ad.user.User.resetCannotChangePassword"></a>

```go
func ResetCannotChangePassword()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-ad.user.User.resetCity"></a>

```go
func ResetCity()
```

##### `ResetCompany` <a name="ResetCompany" id="@cdktf/provider-ad.user.User.resetCompany"></a>

```go
func ResetCompany()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-ad.user.User.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-ad.user.User.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-ad.user.User.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktf/provider-ad.user.User.resetDepartment"></a>

```go
func ResetDepartment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ad.user.User.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDivision` <a name="ResetDivision" id="@cdktf/provider-ad.user.User.resetDivision"></a>

```go
func ResetDivision()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-ad.user.User.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetEmployeeId` <a name="ResetEmployeeId" id="@cdktf/provider-ad.user.User.resetEmployeeId"></a>

```go
func ResetEmployeeId()
```

##### `ResetEmployeeNumber` <a name="ResetEmployeeNumber" id="@cdktf/provider-ad.user.User.resetEmployeeNumber"></a>

```go
func ResetEmployeeNumber()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-ad.user.User.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-ad.user.User.resetFax"></a>

```go
func ResetFax()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktf/provider-ad.user.User.resetGivenName"></a>

```go
func ResetGivenName()
```

##### `ResetHomeDirectory` <a name="ResetHomeDirectory" id="@cdktf/provider-ad.user.User.resetHomeDirectory"></a>

```go
func ResetHomeDirectory()
```

##### `ResetHomeDrive` <a name="ResetHomeDrive" id="@cdktf/provider-ad.user.User.resetHomeDrive"></a>

```go
func ResetHomeDrive()
```

##### `ResetHomePage` <a name="ResetHomePage" id="@cdktf/provider-ad.user.User.resetHomePage"></a>

```go
func ResetHomePage()
```

##### `ResetHomePhone` <a name="ResetHomePhone" id="@cdktf/provider-ad.user.User.resetHomePhone"></a>

```go
func ResetHomePhone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ad.user.User.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialPassword` <a name="ResetInitialPassword" id="@cdktf/provider-ad.user.User.resetInitialPassword"></a>

```go
func ResetInitialPassword()
```

##### `ResetInitials` <a name="ResetInitials" id="@cdktf/provider-ad.user.User.resetInitials"></a>

```go
func ResetInitials()
```

##### `ResetMobilePhone` <a name="ResetMobilePhone" id="@cdktf/provider-ad.user.User.resetMobilePhone"></a>

```go
func ResetMobilePhone()
```

##### `ResetOffice` <a name="ResetOffice" id="@cdktf/provider-ad.user.User.resetOffice"></a>

```go
func ResetOffice()
```

##### `ResetOfficePhone` <a name="ResetOfficePhone" id="@cdktf/provider-ad.user.User.resetOfficePhone"></a>

```go
func ResetOfficePhone()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-ad.user.User.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOtherName` <a name="ResetOtherName" id="@cdktf/provider-ad.user.User.resetOtherName"></a>

```go
func ResetOtherName()
```

##### `ResetPasswordNeverExpires` <a name="ResetPasswordNeverExpires" id="@cdktf/provider-ad.user.User.resetPasswordNeverExpires"></a>

```go
func ResetPasswordNeverExpires()
```

##### `ResetPoBox` <a name="ResetPoBox" id="@cdktf/provider-ad.user.User.resetPoBox"></a>

```go
func ResetPoBox()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-ad.user.User.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetSmartCardLogonRequired` <a name="ResetSmartCardLogonRequired" id="@cdktf/provider-ad.user.User.resetSmartCardLogonRequired"></a>

```go
func ResetSmartCardLogonRequired()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-ad.user.User.resetState"></a>

```go
func ResetState()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-ad.user.User.resetStreetAddress"></a>

```go
func ResetStreetAddress()
```

##### `ResetSurname` <a name="ResetSurname" id="@cdktf/provider-ad.user.User.resetSurname"></a>

```go
func ResetSurname()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-ad.user.User.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetTrustedForDelegation` <a name="ResetTrustedForDelegation" id="@cdktf/provider-ad.user.User.resetTrustedForDelegation"></a>

```go
func ResetTrustedForDelegation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ad.user.User.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/user"

user.User_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.user.User.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/user"

user.User_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ad.user.User.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/user"

user.User_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ad.user.User.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/user"

user.User_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.user.User.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dn">Dn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePasswordInput">CannotChangePasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.companyInput">CompanyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.departmentInput">DepartmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.divisionInput">DivisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeIdInput">EmployeeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumberInput">EmployeeNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.faxInput">FaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenNameInput">GivenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectoryInput">HomeDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDriveInput">HomeDriveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePageInput">HomePageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhoneInput">HomePhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPasswordInput">InitialPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialsInput">InitialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhoneInput">MobilePhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officeInput">OfficeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhoneInput">OfficePhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherNameInput">OtherNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput">PasswordNeverExpiresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBoxInput">PoBoxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalNameInput">PrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountNameInput">SamAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput">SmartCardLogonRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddressInput">StreetAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surnameInput">SurnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegationInput">TrustedForDelegationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePassword">CannotChangePassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.company">Company</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributes">CustomAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.department">Department</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.division">Division</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeId">EmployeeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumber">EmployeeNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fax">Fax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectory">HomeDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDrive">HomeDrive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePage">HomePage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhone">HomePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPassword">InitialPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhone">MobilePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.office">Office</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhone">OfficePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherName">OtherName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpires">PasswordNeverExpires</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBox">PoBox</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalName">PrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountName">SamAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequired">SmartCardLogonRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegation">TrustedForDelegation</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.user.User.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.user.User.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.user.User.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.user.User.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ad.user.User.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.user.User.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.user.User.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.user.User.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.user.User.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.user.User.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.user.User.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.user.User.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.user.User.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-ad.user.User.property.dn"></a>

```go
func Dn() *string
```

- *Type:* *string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktf/provider-ad.user.User.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `CannotChangePasswordInput`<sup>Optional</sup> <a name="CannotChangePasswordInput" id="@cdktf/provider-ad.user.User.property.cannotChangePasswordInput"></a>

```go
func CannotChangePasswordInput() interface{}
```

- *Type:* interface{}

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-ad.user.User.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CompanyInput`<sup>Optional</sup> <a name="CompanyInput" id="@cdktf/provider-ad.user.User.property.companyInput"></a>

```go
func CompanyInput() *string
```

- *Type:* *string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-ad.user.User.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-ad.user.User.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-ad.user.User.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *string
```

- *Type:* *string

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktf/provider-ad.user.User.property.departmentInput"></a>

```go
func DepartmentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ad.user.User.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-ad.user.User.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DivisionInput`<sup>Optional</sup> <a name="DivisionInput" id="@cdktf/provider-ad.user.User.property.divisionInput"></a>

```go
func DivisionInput() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-ad.user.User.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `EmployeeIdInput`<sup>Optional</sup> <a name="EmployeeIdInput" id="@cdktf/provider-ad.user.User.property.employeeIdInput"></a>

```go
func EmployeeIdInput() *string
```

- *Type:* *string

---

##### `EmployeeNumberInput`<sup>Optional</sup> <a name="EmployeeNumberInput" id="@cdktf/provider-ad.user.User.property.employeeNumberInput"></a>

```go
func EmployeeNumberInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-ad.user.User.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-ad.user.User.property.faxInput"></a>

```go
func FaxInput() *string
```

- *Type:* *string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktf/provider-ad.user.User.property.givenNameInput"></a>

```go
func GivenNameInput() *string
```

- *Type:* *string

---

##### `HomeDirectoryInput`<sup>Optional</sup> <a name="HomeDirectoryInput" id="@cdktf/provider-ad.user.User.property.homeDirectoryInput"></a>

```go
func HomeDirectoryInput() *string
```

- *Type:* *string

---

##### `HomeDriveInput`<sup>Optional</sup> <a name="HomeDriveInput" id="@cdktf/provider-ad.user.User.property.homeDriveInput"></a>

```go
func HomeDriveInput() *string
```

- *Type:* *string

---

##### `HomePageInput`<sup>Optional</sup> <a name="HomePageInput" id="@cdktf/provider-ad.user.User.property.homePageInput"></a>

```go
func HomePageInput() *string
```

- *Type:* *string

---

##### `HomePhoneInput`<sup>Optional</sup> <a name="HomePhoneInput" id="@cdktf/provider-ad.user.User.property.homePhoneInput"></a>

```go
func HomePhoneInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ad.user.User.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialPasswordInput`<sup>Optional</sup> <a name="InitialPasswordInput" id="@cdktf/provider-ad.user.User.property.initialPasswordInput"></a>

```go
func InitialPasswordInput() *string
```

- *Type:* *string

---

##### `InitialsInput`<sup>Optional</sup> <a name="InitialsInput" id="@cdktf/provider-ad.user.User.property.initialsInput"></a>

```go
func InitialsInput() *string
```

- *Type:* *string

---

##### `MobilePhoneInput`<sup>Optional</sup> <a name="MobilePhoneInput" id="@cdktf/provider-ad.user.User.property.mobilePhoneInput"></a>

```go
func MobilePhoneInput() *string
```

- *Type:* *string

---

##### `OfficeInput`<sup>Optional</sup> <a name="OfficeInput" id="@cdktf/provider-ad.user.User.property.officeInput"></a>

```go
func OfficeInput() *string
```

- *Type:* *string

---

##### `OfficePhoneInput`<sup>Optional</sup> <a name="OfficePhoneInput" id="@cdktf/provider-ad.user.User.property.officePhoneInput"></a>

```go
func OfficePhoneInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-ad.user.User.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `OtherNameInput`<sup>Optional</sup> <a name="OtherNameInput" id="@cdktf/provider-ad.user.User.property.otherNameInput"></a>

```go
func OtherNameInput() *string
```

- *Type:* *string

---

##### `PasswordNeverExpiresInput`<sup>Optional</sup> <a name="PasswordNeverExpiresInput" id="@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput"></a>

```go
func PasswordNeverExpiresInput() interface{}
```

- *Type:* interface{}

---

##### `PoBoxInput`<sup>Optional</sup> <a name="PoBoxInput" id="@cdktf/provider-ad.user.User.property.poBoxInput"></a>

```go
func PoBoxInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-ad.user.User.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `PrincipalNameInput`<sup>Optional</sup> <a name="PrincipalNameInput" id="@cdktf/provider-ad.user.User.property.principalNameInput"></a>

```go
func PrincipalNameInput() *string
```

- *Type:* *string

---

##### `SamAccountNameInput`<sup>Optional</sup> <a name="SamAccountNameInput" id="@cdktf/provider-ad.user.User.property.samAccountNameInput"></a>

```go
func SamAccountNameInput() *string
```

- *Type:* *string

---

##### `SmartCardLogonRequiredInput`<sup>Optional</sup> <a name="SmartCardLogonRequiredInput" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput"></a>

```go
func SmartCardLogonRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-ad.user.User.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-ad.user.User.property.streetAddressInput"></a>

```go
func StreetAddressInput() *string
```

- *Type:* *string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="@cdktf/provider-ad.user.User.property.surnameInput"></a>

```go
func SurnameInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-ad.user.User.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TrustedForDelegationInput`<sup>Optional</sup> <a name="TrustedForDelegationInput" id="@cdktf/provider-ad.user.User.property.trustedForDelegationInput"></a>

```go
func TrustedForDelegationInput() interface{}
```

- *Type:* interface{}

---

##### `CannotChangePassword`<sup>Required</sup> <a name="CannotChangePassword" id="@cdktf/provider-ad.user.User.property.cannotChangePassword"></a>

```go
func CannotChangePassword() interface{}
```

- *Type:* interface{}

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-ad.user.User.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Company`<sup>Required</sup> <a name="Company" id="@cdktf/provider-ad.user.User.property.company"></a>

```go
func Company() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-ad.user.User.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-ad.user.User.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-ad.user.User.property.customAttributes"></a>

```go
func CustomAttributes() *string
```

- *Type:* *string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-ad.user.User.property.department"></a>

```go
func Department() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ad.user.User.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ad.user.User.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-ad.user.User.property.division"></a>

```go
func Division() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-ad.user.User.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `EmployeeId`<sup>Required</sup> <a name="EmployeeId" id="@cdktf/provider-ad.user.User.property.employeeId"></a>

```go
func EmployeeId() *string
```

- *Type:* *string

---

##### `EmployeeNumber`<sup>Required</sup> <a name="EmployeeNumber" id="@cdktf/provider-ad.user.User.property.employeeNumber"></a>

```go
func EmployeeNumber() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-ad.user.User.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-ad.user.User.property.fax"></a>

```go
func Fax() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-ad.user.User.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="@cdktf/provider-ad.user.User.property.homeDirectory"></a>

```go
func HomeDirectory() *string
```

- *Type:* *string

---

##### `HomeDrive`<sup>Required</sup> <a name="HomeDrive" id="@cdktf/provider-ad.user.User.property.homeDrive"></a>

```go
func HomeDrive() *string
```

- *Type:* *string

---

##### `HomePage`<sup>Required</sup> <a name="HomePage" id="@cdktf/provider-ad.user.User.property.homePage"></a>

```go
func HomePage() *string
```

- *Type:* *string

---

##### `HomePhone`<sup>Required</sup> <a name="HomePhone" id="@cdktf/provider-ad.user.User.property.homePhone"></a>

```go
func HomePhone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.user.User.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialPassword`<sup>Required</sup> <a name="InitialPassword" id="@cdktf/provider-ad.user.User.property.initialPassword"></a>

```go
func InitialPassword() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="@cdktf/provider-ad.user.User.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-ad.user.User.property.mobilePhone"></a>

```go
func MobilePhone() *string
```

- *Type:* *string

---

##### `Office`<sup>Required</sup> <a name="Office" id="@cdktf/provider-ad.user.User.property.office"></a>

```go
func Office() *string
```

- *Type:* *string

---

##### `OfficePhone`<sup>Required</sup> <a name="OfficePhone" id="@cdktf/provider-ad.user.User.property.officePhone"></a>

```go
func OfficePhone() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-ad.user.User.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OtherName`<sup>Required</sup> <a name="OtherName" id="@cdktf/provider-ad.user.User.property.otherName"></a>

```go
func OtherName() *string
```

- *Type:* *string

---

##### `PasswordNeverExpires`<sup>Required</sup> <a name="PasswordNeverExpires" id="@cdktf/provider-ad.user.User.property.passwordNeverExpires"></a>

```go
func PasswordNeverExpires() interface{}
```

- *Type:* interface{}

---

##### `PoBox`<sup>Required</sup> <a name="PoBox" id="@cdktf/provider-ad.user.User.property.poBox"></a>

```go
func PoBox() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-ad.user.User.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-ad.user.User.property.principalName"></a>

```go
func PrincipalName() *string
```

- *Type:* *string

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktf/provider-ad.user.User.property.samAccountName"></a>

```go
func SamAccountName() *string
```

- *Type:* *string

---

##### `SmartCardLogonRequired`<sup>Required</sup> <a name="SmartCardLogonRequired" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequired"></a>

```go
func SmartCardLogonRequired() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-ad.user.User.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-ad.user.User.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktf/provider-ad.user.User.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-ad.user.User.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `TrustedForDelegation`<sup>Required</sup> <a name="TrustedForDelegation" id="@cdktf/provider-ad.user.User.property.trustedForDelegation"></a>

```go
func TrustedForDelegation() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.user.User.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-ad.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.user.UserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ad-go/ad/user"

&user.UserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	PrincipalName: *string,
	SamAccountName: *string,
	CannotChangePassword: interface{},
	City: *string,
	Company: *string,
	Container: *string,
	Country: *string,
	CustomAttributes: *string,
	Department: *string,
	Description: *string,
	Division: *string,
	EmailAddress: *string,
	EmployeeId: *string,
	EmployeeNumber: *string,
	Enabled: interface{},
	Fax: *string,
	GivenName: *string,
	HomeDirectory: *string,
	HomeDrive: *string,
	HomePage: *string,
	HomePhone: *string,
	Id: *string,
	InitialPassword: *string,
	Initials: *string,
	MobilePhone: *string,
	Office: *string,
	OfficePhone: *string,
	Organization: *string,
	OtherName: *string,
	PasswordNeverExpires: interface{},
	PoBox: *string,
	PostalCode: *string,
	SmartCardLogonRequired: interface{},
	State: *string,
	StreetAddress: *string,
	Surname: *string,
	Title: *string,
	TrustedForDelegation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The Display Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.principalName">PrincipalName</a></code> | <code>*string</code> | The Principal Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.samAccountName">SamAccountName</a></code> | <code>*string</code> | The pre-win2k user logon name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword">CannotChangePassword</a></code> | <code>interface{}</code> | If set to true, the user will not be allowed to change their password. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.city">City</a></code> | <code>*string</code> | Specifies the user's town or city. This parameter sets the City property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.company">Company</a></code> | <code>*string</code> | Specifies the user's company. This parameter sets the Company property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.container">Container</a></code> | <code>*string</code> | A DN of the container object that will be holding the user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.country">Country</a></code> | <code>*string</code> | Specifies the country by setting the country code (refer to ISO 3166). |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.customAttributes">CustomAttributes</a></code> | <code>*string</code> | JSON encoded map that represents key/value pairs for custom attributes. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.department">Department</a></code> | <code>*string</code> | Specifies the user's department. This parameter sets the Department property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.description">Description</a></code> | <code>*string</code> | Specifies a description of the object. This parameter sets the value of the Description property for the user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.division">Division</a></code> | <code>*string</code> | Specifies the user's division. This parameter sets the Division property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeId">EmployeeId</a></code> | <code>*string</code> | Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeNumber">EmployeeNumber</a></code> | <code>*string</code> | Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If set to false, the user will be disabled. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.fax">Fax</a></code> | <code>*string</code> | Specifies the user's fax phone number. This parameter sets the Fax property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.givenName">GivenName</a></code> | <code>*string</code> | Specifies the user's given name. This parameter sets the GivenName property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDirectory">HomeDirectory</a></code> | <code>*string</code> | Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDrive">HomeDrive</a></code> | <code>*string</code> | Specifies a drive that is associated with the UNC path defined by the HomeDirectory property. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePage">HomePage</a></code> | <code>*string</code> | Specifies the URL of the home page of the object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePhone">HomePhone</a></code> | <code>*string</code> | Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initialPassword">InitialPassword</a></code> | <code>*string</code> | The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initials">Initials</a></code> | <code>*string</code> | Specifies the initials that represent part of a user's name. Maximum 6 char. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.mobilePhone">MobilePhone</a></code> | <code>*string</code> | Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.office">Office</a></code> | <code>*string</code> | Specifies the location of the user's office or place of business. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.officePhone">OfficePhone</a></code> | <code>*string</code> | Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.organization">Organization</a></code> | <code>*string</code> | Specifies the user's organization. This parameter sets the Organization property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.otherName">OtherName</a></code> | <code>*string</code> | Specifies a name in addition to a user's given name and surname, such as the user's middle name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires">PasswordNeverExpires</a></code> | <code>interface{}</code> | If set to true, the password for this user will not expire. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.poBox">PoBox</a></code> | <code>*string</code> | Specifies the user's post office box number. This parameter sets the POBox property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.postalCode">PostalCode</a></code> | <code>*string</code> | Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired">SmartCardLogonRequired</a></code> | <code>interface{}</code> | If set to true, a smart card is required to logon. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.state">State</a></code> | <code>*string</code> | Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | Specifies the user's street address. This parameter sets the StreetAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.surname">Surname</a></code> | <code>*string</code> | Specifies the user's last name or surname. This parameter sets the Surname property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.title">Title</a></code> | <code>*string</code> | Specifies the user's title. This parameter sets the Title property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation">TrustedForDelegation</a></code> | <code>interface{}</code> | If set to true, the user account is trusted for Kerberos delegation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.user.UserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.user.UserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.user.UserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.user.UserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.user.UserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.user.UserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.user.UserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ad.user.UserConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The Display Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#display_name User#display_name}

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-ad.user.UserConfig.property.principalName"></a>

```go
PrincipalName *string
```

- *Type:* *string

The Principal Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#principal_name User#principal_name}

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktf/provider-ad.user.UserConfig.property.samAccountName"></a>

```go
SamAccountName *string
```

- *Type:* *string

The pre-win2k user logon name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#sam_account_name User#sam_account_name}

---

##### `CannotChangePassword`<sup>Optional</sup> <a name="CannotChangePassword" id="@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword"></a>

```go
CannotChangePassword interface{}
```

- *Type:* interface{}

If set to true, the user will not be allowed to change their password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#cannot_change_password User#cannot_change_password}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-ad.user.UserConfig.property.city"></a>

```go
City *string
```

- *Type:* *string

Specifies the user's town or city. This parameter sets the City property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#city User#city}

---

##### `Company`<sup>Optional</sup> <a name="Company" id="@cdktf/provider-ad.user.UserConfig.property.company"></a>

```go
Company *string
```

- *Type:* *string

Specifies the user's company. This parameter sets the Company property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#company User#company}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-ad.user.UserConfig.property.container"></a>

```go
Container *string
```

- *Type:* *string

A DN of the container object that will be holding the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#container User#container}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-ad.user.UserConfig.property.country"></a>

```go
Country *string
```

- *Type:* *string

Specifies the country by setting the country code (refer to ISO 3166).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#country User#country}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-ad.user.UserConfig.property.customAttributes"></a>

```go
CustomAttributes *string
```

- *Type:* *string

JSON encoded map that represents key/value pairs for custom attributes.

Please note that `terraform import` will not import these attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#custom_attributes User#custom_attributes}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktf/provider-ad.user.UserConfig.property.department"></a>

```go
Department *string
```

- *Type:* *string

Specifies the user's department. This parameter sets the Department property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#department User#department}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ad.user.UserConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Specifies a description of the object. This parameter sets the value of the Description property for the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#description User#description}

---

##### `Division`<sup>Optional</sup> <a name="Division" id="@cdktf/provider-ad.user.UserConfig.property.division"></a>

```go
Division *string
```

- *Type:* *string

Specifies the user's division. This parameter sets the Division property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#division User#division}

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-ad.user.UserConfig.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#email_address User#email_address}

---

##### `EmployeeId`<sup>Optional</sup> <a name="EmployeeId" id="@cdktf/provider-ad.user.UserConfig.property.employeeId"></a>

```go
EmployeeId *string
```

- *Type:* *string

Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_id User#employee_id}

---

##### `EmployeeNumber`<sup>Optional</sup> <a name="EmployeeNumber" id="@cdktf/provider-ad.user.UserConfig.property.employeeNumber"></a>

```go
EmployeeNumber *string
```

- *Type:* *string

Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_number User#employee_number}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-ad.user.UserConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If set to false, the user will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#enabled User#enabled}

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-ad.user.UserConfig.property.fax"></a>

```go
Fax *string
```

- *Type:* *string

Specifies the user's fax phone number. This parameter sets the Fax property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#fax User#fax}

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktf/provider-ad.user.UserConfig.property.givenName"></a>

```go
GivenName *string
```

- *Type:* *string

Specifies the user's given name. This parameter sets the GivenName property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#given_name User#given_name}

---

##### `HomeDirectory`<sup>Optional</sup> <a name="HomeDirectory" id="@cdktf/provider-ad.user.UserConfig.property.homeDirectory"></a>

```go
HomeDirectory *string
```

- *Type:* *string

Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_directory User#home_directory}

---

##### `HomeDrive`<sup>Optional</sup> <a name="HomeDrive" id="@cdktf/provider-ad.user.UserConfig.property.homeDrive"></a>

```go
HomeDrive *string
```

- *Type:* *string

Specifies a drive that is associated with the UNC path defined by the HomeDirectory property.

The drive letter is specified as <DriveLetter>: where <DriveLetter> indicates the letter of the drive to associate. The <DriveLetter> must be a single, uppercase letter and the colon is required. This parameter sets the HomeDrive property of the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_drive User#home_drive}

---

##### `HomePage`<sup>Optional</sup> <a name="HomePage" id="@cdktf/provider-ad.user.UserConfig.property.homePage"></a>

```go
HomePage *string
```

- *Type:* *string

Specifies the URL of the home page of the object.

This parameter sets the homePage property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_page User#home_page}

---

##### `HomePhone`<sup>Optional</sup> <a name="HomePhone" id="@cdktf/provider-ad.user.UserConfig.property.homePhone"></a>

```go
HomePhone *string
```

- *Type:* *string

Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_phone User#home_phone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ad.user.UserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialPassword`<sup>Optional</sup> <a name="InitialPassword" id="@cdktf/provider-ad.user.UserConfig.property.initialPassword"></a>

```go
InitialPassword *string
```

- *Type:* *string

The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initial_password User#initial_password}

---

##### `Initials`<sup>Optional</sup> <a name="Initials" id="@cdktf/provider-ad.user.UserConfig.property.initials"></a>

```go
Initials *string
```

- *Type:* *string

Specifies the initials that represent part of a user's name. Maximum 6 char.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initials User#initials}

---

##### `MobilePhone`<sup>Optional</sup> <a name="MobilePhone" id="@cdktf/provider-ad.user.UserConfig.property.mobilePhone"></a>

```go
MobilePhone *string
```

- *Type:* *string

Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `Office`<sup>Optional</sup> <a name="Office" id="@cdktf/provider-ad.user.UserConfig.property.office"></a>

```go
Office *string
```

- *Type:* *string

Specifies the location of the user's office or place of business.

This parameter sets the Office property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office User#office}

---

##### `OfficePhone`<sup>Optional</sup> <a name="OfficePhone" id="@cdktf/provider-ad.user.UserConfig.property.officePhone"></a>

```go
OfficePhone *string
```

- *Type:* *string

Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office_phone User#office_phone}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-ad.user.UserConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Specifies the user's organization. This parameter sets the Organization property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#organization User#organization}

---

##### `OtherName`<sup>Optional</sup> <a name="OtherName" id="@cdktf/provider-ad.user.UserConfig.property.otherName"></a>

```go
OtherName *string
```

- *Type:* *string

Specifies a name in addition to a user's given name and surname, such as the user's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#other_name User#other_name}

---

##### `PasswordNeverExpires`<sup>Optional</sup> <a name="PasswordNeverExpires" id="@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires"></a>

```go
PasswordNeverExpires interface{}
```

- *Type:* interface{}

If set to true, the password for this user will not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#password_never_expires User#password_never_expires}

---

##### `PoBox`<sup>Optional</sup> <a name="PoBox" id="@cdktf/provider-ad.user.UserConfig.property.poBox"></a>

```go
PoBox *string
```

- *Type:* *string

Specifies the user's post office box number. This parameter sets the POBox property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#po_box User#po_box}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-ad.user.UserConfig.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#postal_code User#postal_code}

---

##### `SmartCardLogonRequired`<sup>Optional</sup> <a name="SmartCardLogonRequired" id="@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired"></a>

```go
SmartCardLogonRequired interface{}
```

- *Type:* interface{}

If set to true, a smart card is required to logon.

This parameter sets the SmartCardLoginRequired property for a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#smart_card_logon_required User#smart_card_logon_required}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-ad.user.UserConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#state User#state}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-ad.user.UserConfig.property.streetAddress"></a>

```go
StreetAddress *string
```

- *Type:* *string

Specifies the user's street address. This parameter sets the StreetAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#street_address User#street_address}

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="@cdktf/provider-ad.user.UserConfig.property.surname"></a>

```go
Surname *string
```

- *Type:* *string

Specifies the user's last name or surname. This parameter sets the Surname property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#surname User#surname}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-ad.user.UserConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Specifies the user's title. This parameter sets the Title property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#title User#title}

---

##### `TrustedForDelegation`<sup>Optional</sup> <a name="TrustedForDelegation" id="@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation"></a>

```go
TrustedForDelegation interface{}
```

- *Type:* interface{}

If set to true, the user account is trusted for Kerberos delegation.

A service that runs under an account that is trusted for Kerberos delegation can assume the identity of a client requesting the service. This parameter sets the TrustedForDelegation property of an account object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#trusted_for_delegation User#trusted_for_delegation}

---



