# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-ad.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-ad.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user ad_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.user.User.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new User(Construct Scope, string Id, UserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ad.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ad.user.User.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ad.user.User.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.user.User.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ad.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.user.User.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.user.User.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ad.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.user.User.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ad.user.User.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.user.User.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.user.User.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ad.user.User.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ad.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.user.User.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.user.User.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.user.User.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ad.user.User.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ad.user.User.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.user.User.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.user.User.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ad.user.User.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.user.User.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ad.user.User.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ad.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ad.user.User.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ad.user.User.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.user.User.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCannotChangePassword` <a name="ResetCannotChangePassword" id="@cdktf/provider-ad.user.User.resetCannotChangePassword"></a>

```csharp
private void ResetCannotChangePassword()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-ad.user.User.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCompany` <a name="ResetCompany" id="@cdktf/provider-ad.user.User.resetCompany"></a>

```csharp
private void ResetCompany()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-ad.user.User.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-ad.user.User.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-ad.user.User.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktf/provider-ad.user.User.resetDepartment"></a>

```csharp
private void ResetDepartment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ad.user.User.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDivision` <a name="ResetDivision" id="@cdktf/provider-ad.user.User.resetDivision"></a>

```csharp
private void ResetDivision()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-ad.user.User.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetEmployeeId` <a name="ResetEmployeeId" id="@cdktf/provider-ad.user.User.resetEmployeeId"></a>

```csharp
private void ResetEmployeeId()
```

##### `ResetEmployeeNumber` <a name="ResetEmployeeNumber" id="@cdktf/provider-ad.user.User.resetEmployeeNumber"></a>

```csharp
private void ResetEmployeeNumber()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-ad.user.User.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-ad.user.User.resetFax"></a>

```csharp
private void ResetFax()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktf/provider-ad.user.User.resetGivenName"></a>

```csharp
private void ResetGivenName()
```

##### `ResetHomeDirectory` <a name="ResetHomeDirectory" id="@cdktf/provider-ad.user.User.resetHomeDirectory"></a>

```csharp
private void ResetHomeDirectory()
```

##### `ResetHomeDrive` <a name="ResetHomeDrive" id="@cdktf/provider-ad.user.User.resetHomeDrive"></a>

```csharp
private void ResetHomeDrive()
```

##### `ResetHomePage` <a name="ResetHomePage" id="@cdktf/provider-ad.user.User.resetHomePage"></a>

```csharp
private void ResetHomePage()
```

##### `ResetHomePhone` <a name="ResetHomePhone" id="@cdktf/provider-ad.user.User.resetHomePhone"></a>

```csharp
private void ResetHomePhone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ad.user.User.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialPassword` <a name="ResetInitialPassword" id="@cdktf/provider-ad.user.User.resetInitialPassword"></a>

```csharp
private void ResetInitialPassword()
```

##### `ResetInitials` <a name="ResetInitials" id="@cdktf/provider-ad.user.User.resetInitials"></a>

```csharp
private void ResetInitials()
```

##### `ResetMobilePhone` <a name="ResetMobilePhone" id="@cdktf/provider-ad.user.User.resetMobilePhone"></a>

```csharp
private void ResetMobilePhone()
```

##### `ResetOffice` <a name="ResetOffice" id="@cdktf/provider-ad.user.User.resetOffice"></a>

```csharp
private void ResetOffice()
```

##### `ResetOfficePhone` <a name="ResetOfficePhone" id="@cdktf/provider-ad.user.User.resetOfficePhone"></a>

```csharp
private void ResetOfficePhone()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-ad.user.User.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOtherName` <a name="ResetOtherName" id="@cdktf/provider-ad.user.User.resetOtherName"></a>

```csharp
private void ResetOtherName()
```

##### `ResetPasswordNeverExpires` <a name="ResetPasswordNeverExpires" id="@cdktf/provider-ad.user.User.resetPasswordNeverExpires"></a>

```csharp
private void ResetPasswordNeverExpires()
```

##### `ResetPoBox` <a name="ResetPoBox" id="@cdktf/provider-ad.user.User.resetPoBox"></a>

```csharp
private void ResetPoBox()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-ad.user.User.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetSmartCardLogonRequired` <a name="ResetSmartCardLogonRequired" id="@cdktf/provider-ad.user.User.resetSmartCardLogonRequired"></a>

```csharp
private void ResetSmartCardLogonRequired()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-ad.user.User.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-ad.user.User.resetStreetAddress"></a>

```csharp
private void ResetStreetAddress()
```

##### `ResetSurname` <a name="ResetSurname" id="@cdktf/provider-ad.user.User.resetSurname"></a>

```csharp
private void ResetSurname()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-ad.user.User.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetTrustedForDelegation` <a name="ResetTrustedForDelegation" id="@cdktf/provider-ad.user.User.resetTrustedForDelegation"></a>

```csharp
private void ResetTrustedForDelegation()
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

```csharp
using HashiCorp.Cdktf.Providers.Ad;

User.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.user.User.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.user.User.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

User.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.user.User.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ad.user.User.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

User.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.user.User.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ad.user.User.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

User.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the User to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.user.User.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dn">Dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.sid">Sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePasswordInput">CannotChangePasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.companyInput">CompanyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributesInput">CustomAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.departmentInput">DepartmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.divisionInput">DivisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeIdInput">EmployeeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumberInput">EmployeeNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.faxInput">FaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenNameInput">GivenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectoryInput">HomeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDriveInput">HomeDriveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePageInput">HomePageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhoneInput">HomePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPasswordInput">InitialPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialsInput">InitialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhoneInput">MobilePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officeInput">OfficeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhoneInput">OfficePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherNameInput">OtherNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput">PasswordNeverExpiresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBoxInput">PoBoxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalNameInput">PrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountNameInput">SamAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput">SmartCardLogonRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddressInput">StreetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surnameInput">SurnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegationInput">TrustedForDelegationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePassword">CannotChangePassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.company">Company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributes">CustomAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.department">Department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.division">Division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeId">EmployeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumber">EmployeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fax">Fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDrive">HomeDrive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePage">HomePage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhone">HomePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPassword">InitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initials">Initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhone">MobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.office">Office</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhone">OfficePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherName">OtherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpires">PasswordNeverExpires</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBox">PoBox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalName">PrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountName">SamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequired">SmartCardLogonRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surname">Surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegation">TrustedForDelegation</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.user.User.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.user.User.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.user.User.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.user.User.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ad.user.User.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.user.User.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.user.User.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.user.User.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.user.User.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.user.User.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.user.User.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.user.User.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.user.User.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-ad.user.User.property.dn"></a>

```csharp
public string Dn { get; }
```

- *Type:* string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktf/provider-ad.user.User.property.sid"></a>

```csharp
public string Sid { get; }
```

- *Type:* string

---

##### `CannotChangePasswordInput`<sup>Optional</sup> <a name="CannotChangePasswordInput" id="@cdktf/provider-ad.user.User.property.cannotChangePasswordInput"></a>

```csharp
public object CannotChangePasswordInput { get; }
```

- *Type:* object

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-ad.user.User.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CompanyInput`<sup>Optional</sup> <a name="CompanyInput" id="@cdktf/provider-ad.user.User.property.companyInput"></a>

```csharp
public string CompanyInput { get; }
```

- *Type:* string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-ad.user.User.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-ad.user.User.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-ad.user.User.property.customAttributesInput"></a>

```csharp
public string CustomAttributesInput { get; }
```

- *Type:* string

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktf/provider-ad.user.User.property.departmentInput"></a>

```csharp
public string DepartmentInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ad.user.User.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-ad.user.User.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DivisionInput`<sup>Optional</sup> <a name="DivisionInput" id="@cdktf/provider-ad.user.User.property.divisionInput"></a>

```csharp
public string DivisionInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-ad.user.User.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `EmployeeIdInput`<sup>Optional</sup> <a name="EmployeeIdInput" id="@cdktf/provider-ad.user.User.property.employeeIdInput"></a>

```csharp
public string EmployeeIdInput { get; }
```

- *Type:* string

---

##### `EmployeeNumberInput`<sup>Optional</sup> <a name="EmployeeNumberInput" id="@cdktf/provider-ad.user.User.property.employeeNumberInput"></a>

```csharp
public string EmployeeNumberInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-ad.user.User.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-ad.user.User.property.faxInput"></a>

```csharp
public string FaxInput { get; }
```

- *Type:* string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktf/provider-ad.user.User.property.givenNameInput"></a>

```csharp
public string GivenNameInput { get; }
```

- *Type:* string

---

##### `HomeDirectoryInput`<sup>Optional</sup> <a name="HomeDirectoryInput" id="@cdktf/provider-ad.user.User.property.homeDirectoryInput"></a>

```csharp
public string HomeDirectoryInput { get; }
```

- *Type:* string

---

##### `HomeDriveInput`<sup>Optional</sup> <a name="HomeDriveInput" id="@cdktf/provider-ad.user.User.property.homeDriveInput"></a>

```csharp
public string HomeDriveInput { get; }
```

- *Type:* string

---

##### `HomePageInput`<sup>Optional</sup> <a name="HomePageInput" id="@cdktf/provider-ad.user.User.property.homePageInput"></a>

```csharp
public string HomePageInput { get; }
```

- *Type:* string

---

##### `HomePhoneInput`<sup>Optional</sup> <a name="HomePhoneInput" id="@cdktf/provider-ad.user.User.property.homePhoneInput"></a>

```csharp
public string HomePhoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ad.user.User.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialPasswordInput`<sup>Optional</sup> <a name="InitialPasswordInput" id="@cdktf/provider-ad.user.User.property.initialPasswordInput"></a>

```csharp
public string InitialPasswordInput { get; }
```

- *Type:* string

---

##### `InitialsInput`<sup>Optional</sup> <a name="InitialsInput" id="@cdktf/provider-ad.user.User.property.initialsInput"></a>

```csharp
public string InitialsInput { get; }
```

- *Type:* string

---

##### `MobilePhoneInput`<sup>Optional</sup> <a name="MobilePhoneInput" id="@cdktf/provider-ad.user.User.property.mobilePhoneInput"></a>

```csharp
public string MobilePhoneInput { get; }
```

- *Type:* string

---

##### `OfficeInput`<sup>Optional</sup> <a name="OfficeInput" id="@cdktf/provider-ad.user.User.property.officeInput"></a>

```csharp
public string OfficeInput { get; }
```

- *Type:* string

---

##### `OfficePhoneInput`<sup>Optional</sup> <a name="OfficePhoneInput" id="@cdktf/provider-ad.user.User.property.officePhoneInput"></a>

```csharp
public string OfficePhoneInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-ad.user.User.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `OtherNameInput`<sup>Optional</sup> <a name="OtherNameInput" id="@cdktf/provider-ad.user.User.property.otherNameInput"></a>

```csharp
public string OtherNameInput { get; }
```

- *Type:* string

---

##### `PasswordNeverExpiresInput`<sup>Optional</sup> <a name="PasswordNeverExpiresInput" id="@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput"></a>

```csharp
public object PasswordNeverExpiresInput { get; }
```

- *Type:* object

---

##### `PoBoxInput`<sup>Optional</sup> <a name="PoBoxInput" id="@cdktf/provider-ad.user.User.property.poBoxInput"></a>

```csharp
public string PoBoxInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-ad.user.User.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `PrincipalNameInput`<sup>Optional</sup> <a name="PrincipalNameInput" id="@cdktf/provider-ad.user.User.property.principalNameInput"></a>

```csharp
public string PrincipalNameInput { get; }
```

- *Type:* string

---

##### `SamAccountNameInput`<sup>Optional</sup> <a name="SamAccountNameInput" id="@cdktf/provider-ad.user.User.property.samAccountNameInput"></a>

```csharp
public string SamAccountNameInput { get; }
```

- *Type:* string

---

##### `SmartCardLogonRequiredInput`<sup>Optional</sup> <a name="SmartCardLogonRequiredInput" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput"></a>

```csharp
public object SmartCardLogonRequiredInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-ad.user.User.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-ad.user.User.property.streetAddressInput"></a>

```csharp
public string StreetAddressInput { get; }
```

- *Type:* string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="@cdktf/provider-ad.user.User.property.surnameInput"></a>

```csharp
public string SurnameInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-ad.user.User.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TrustedForDelegationInput`<sup>Optional</sup> <a name="TrustedForDelegationInput" id="@cdktf/provider-ad.user.User.property.trustedForDelegationInput"></a>

```csharp
public object TrustedForDelegationInput { get; }
```

- *Type:* object

---

##### `CannotChangePassword`<sup>Required</sup> <a name="CannotChangePassword" id="@cdktf/provider-ad.user.User.property.cannotChangePassword"></a>

```csharp
public object CannotChangePassword { get; }
```

- *Type:* object

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-ad.user.User.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Company`<sup>Required</sup> <a name="Company" id="@cdktf/provider-ad.user.User.property.company"></a>

```csharp
public string Company { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-ad.user.User.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-ad.user.User.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-ad.user.User.property.customAttributes"></a>

```csharp
public string CustomAttributes { get; }
```

- *Type:* string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-ad.user.User.property.department"></a>

```csharp
public string Department { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ad.user.User.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ad.user.User.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-ad.user.User.property.division"></a>

```csharp
public string Division { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-ad.user.User.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `EmployeeId`<sup>Required</sup> <a name="EmployeeId" id="@cdktf/provider-ad.user.User.property.employeeId"></a>

```csharp
public string EmployeeId { get; }
```

- *Type:* string

---

##### `EmployeeNumber`<sup>Required</sup> <a name="EmployeeNumber" id="@cdktf/provider-ad.user.User.property.employeeNumber"></a>

```csharp
public string EmployeeNumber { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-ad.user.User.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-ad.user.User.property.fax"></a>

```csharp
public string Fax { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-ad.user.User.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="@cdktf/provider-ad.user.User.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; }
```

- *Type:* string

---

##### `HomeDrive`<sup>Required</sup> <a name="HomeDrive" id="@cdktf/provider-ad.user.User.property.homeDrive"></a>

```csharp
public string HomeDrive { get; }
```

- *Type:* string

---

##### `HomePage`<sup>Required</sup> <a name="HomePage" id="@cdktf/provider-ad.user.User.property.homePage"></a>

```csharp
public string HomePage { get; }
```

- *Type:* string

---

##### `HomePhone`<sup>Required</sup> <a name="HomePhone" id="@cdktf/provider-ad.user.User.property.homePhone"></a>

```csharp
public string HomePhone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.user.User.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialPassword`<sup>Required</sup> <a name="InitialPassword" id="@cdktf/provider-ad.user.User.property.initialPassword"></a>

```csharp
public string InitialPassword { get; }
```

- *Type:* string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="@cdktf/provider-ad.user.User.property.initials"></a>

```csharp
public string Initials { get; }
```

- *Type:* string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-ad.user.User.property.mobilePhone"></a>

```csharp
public string MobilePhone { get; }
```

- *Type:* string

---

##### `Office`<sup>Required</sup> <a name="Office" id="@cdktf/provider-ad.user.User.property.office"></a>

```csharp
public string Office { get; }
```

- *Type:* string

---

##### `OfficePhone`<sup>Required</sup> <a name="OfficePhone" id="@cdktf/provider-ad.user.User.property.officePhone"></a>

```csharp
public string OfficePhone { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-ad.user.User.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OtherName`<sup>Required</sup> <a name="OtherName" id="@cdktf/provider-ad.user.User.property.otherName"></a>

```csharp
public string OtherName { get; }
```

- *Type:* string

---

##### `PasswordNeverExpires`<sup>Required</sup> <a name="PasswordNeverExpires" id="@cdktf/provider-ad.user.User.property.passwordNeverExpires"></a>

```csharp
public object PasswordNeverExpires { get; }
```

- *Type:* object

---

##### `PoBox`<sup>Required</sup> <a name="PoBox" id="@cdktf/provider-ad.user.User.property.poBox"></a>

```csharp
public string PoBox { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-ad.user.User.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-ad.user.User.property.principalName"></a>

```csharp
public string PrincipalName { get; }
```

- *Type:* string

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktf/provider-ad.user.User.property.samAccountName"></a>

```csharp
public string SamAccountName { get; }
```

- *Type:* string

---

##### `SmartCardLogonRequired`<sup>Required</sup> <a name="SmartCardLogonRequired" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequired"></a>

```csharp
public object SmartCardLogonRequired { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-ad.user.User.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-ad.user.User.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktf/provider-ad.user.User.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-ad.user.User.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `TrustedForDelegation`<sup>Required</sup> <a name="TrustedForDelegation" id="@cdktf/provider-ad.user.User.property.trustedForDelegation"></a>

```csharp
public object TrustedForDelegation { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.user.User.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-ad.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.user.UserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new UserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string PrincipalName,
    string SamAccountName,
    object CannotChangePassword = null,
    string City = null,
    string Company = null,
    string Container = null,
    string Country = null,
    string CustomAttributes = null,
    string Department = null,
    string Description = null,
    string Division = null,
    string EmailAddress = null,
    string EmployeeId = null,
    string EmployeeNumber = null,
    object Enabled = null,
    string Fax = null,
    string GivenName = null,
    string HomeDirectory = null,
    string HomeDrive = null,
    string HomePage = null,
    string HomePhone = null,
    string Id = null,
    string InitialPassword = null,
    string Initials = null,
    string MobilePhone = null,
    string Office = null,
    string OfficePhone = null,
    string Organization = null,
    string OtherName = null,
    object PasswordNeverExpires = null,
    string PoBox = null,
    string PostalCode = null,
    object SmartCardLogonRequired = null,
    string State = null,
    string StreetAddress = null,
    string Surname = null,
    string Title = null,
    object TrustedForDelegation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The Display Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.principalName">PrincipalName</a></code> | <code>string</code> | The Principal Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.samAccountName">SamAccountName</a></code> | <code>string</code> | The pre-win2k user logon name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword">CannotChangePassword</a></code> | <code>object</code> | If set to true, the user will not be allowed to change their password. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.city">City</a></code> | <code>string</code> | Specifies the user's town or city. This parameter sets the City property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.company">Company</a></code> | <code>string</code> | Specifies the user's company. This parameter sets the Company property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.container">Container</a></code> | <code>string</code> | A DN of the container object that will be holding the user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.country">Country</a></code> | <code>string</code> | Specifies the country by setting the country code (refer to ISO 3166). |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.customAttributes">CustomAttributes</a></code> | <code>string</code> | JSON encoded map that represents key/value pairs for custom attributes. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.department">Department</a></code> | <code>string</code> | Specifies the user's department. This parameter sets the Department property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.description">Description</a></code> | <code>string</code> | Specifies a description of the object. This parameter sets the value of the Description property for the user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.division">Division</a></code> | <code>string</code> | Specifies the user's division. This parameter sets the Division property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeId">EmployeeId</a></code> | <code>string</code> | Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeNumber">EmployeeNumber</a></code> | <code>string</code> | Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.enabled">Enabled</a></code> | <code>object</code> | If set to false, the user will be disabled. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.fax">Fax</a></code> | <code>string</code> | Specifies the user's fax phone number. This parameter sets the Fax property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.givenName">GivenName</a></code> | <code>string</code> | Specifies the user's given name. This parameter sets the GivenName property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDrive">HomeDrive</a></code> | <code>string</code> | Specifies a drive that is associated with the UNC path defined by the HomeDirectory property. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePage">HomePage</a></code> | <code>string</code> | Specifies the URL of the home page of the object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePhone">HomePhone</a></code> | <code>string</code> | Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initialPassword">InitialPassword</a></code> | <code>string</code> | The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initials">Initials</a></code> | <code>string</code> | Specifies the initials that represent part of a user's name. Maximum 6 char. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.mobilePhone">MobilePhone</a></code> | <code>string</code> | Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.office">Office</a></code> | <code>string</code> | Specifies the location of the user's office or place of business. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.officePhone">OfficePhone</a></code> | <code>string</code> | Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.organization">Organization</a></code> | <code>string</code> | Specifies the user's organization. This parameter sets the Organization property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.otherName">OtherName</a></code> | <code>string</code> | Specifies a name in addition to a user's given name and surname, such as the user's middle name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires">PasswordNeverExpires</a></code> | <code>object</code> | If set to true, the password for this user will not expire. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.poBox">PoBox</a></code> | <code>string</code> | Specifies the user's post office box number. This parameter sets the POBox property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.postalCode">PostalCode</a></code> | <code>string</code> | Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired">SmartCardLogonRequired</a></code> | <code>object</code> | If set to true, a smart card is required to logon. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.state">State</a></code> | <code>string</code> | Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.streetAddress">StreetAddress</a></code> | <code>string</code> | Specifies the user's street address. This parameter sets the StreetAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.surname">Surname</a></code> | <code>string</code> | Specifies the user's last name or surname. This parameter sets the Surname property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.title">Title</a></code> | <code>string</code> | Specifies the user's title. This parameter sets the Title property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation">TrustedForDelegation</a></code> | <code>object</code> | If set to true, the user account is trusted for Kerberos delegation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.user.UserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.user.UserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.user.UserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.user.UserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.user.UserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.user.UserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.user.UserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ad.user.UserConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The Display Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#display_name User#display_name}

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-ad.user.UserConfig.property.principalName"></a>

```csharp
public string PrincipalName { get; set; }
```

- *Type:* string

The Principal Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#principal_name User#principal_name}

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktf/provider-ad.user.UserConfig.property.samAccountName"></a>

```csharp
public string SamAccountName { get; set; }
```

- *Type:* string

The pre-win2k user logon name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#sam_account_name User#sam_account_name}

---

##### `CannotChangePassword`<sup>Optional</sup> <a name="CannotChangePassword" id="@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword"></a>

```csharp
public object CannotChangePassword { get; set; }
```

- *Type:* object

If set to true, the user will not be allowed to change their password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#cannot_change_password User#cannot_change_password}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-ad.user.UserConfig.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Specifies the user's town or city. This parameter sets the City property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#city User#city}

---

##### `Company`<sup>Optional</sup> <a name="Company" id="@cdktf/provider-ad.user.UserConfig.property.company"></a>

```csharp
public string Company { get; set; }
```

- *Type:* string

Specifies the user's company. This parameter sets the Company property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#company User#company}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-ad.user.UserConfig.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

A DN of the container object that will be holding the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#container User#container}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-ad.user.UserConfig.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Specifies the country by setting the country code (refer to ISO 3166).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#country User#country}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-ad.user.UserConfig.property.customAttributes"></a>

```csharp
public string CustomAttributes { get; set; }
```

- *Type:* string

JSON encoded map that represents key/value pairs for custom attributes.

Please note that `terraform import` will not import these attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#custom_attributes User#custom_attributes}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktf/provider-ad.user.UserConfig.property.department"></a>

```csharp
public string Department { get; set; }
```

- *Type:* string

Specifies the user's department. This parameter sets the Department property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#department User#department}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ad.user.UserConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Specifies a description of the object. This parameter sets the value of the Description property for the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#description User#description}

---

##### `Division`<sup>Optional</sup> <a name="Division" id="@cdktf/provider-ad.user.UserConfig.property.division"></a>

```csharp
public string Division { get; set; }
```

- *Type:* string

Specifies the user's division. This parameter sets the Division property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#division User#division}

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-ad.user.UserConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#email_address User#email_address}

---

##### `EmployeeId`<sup>Optional</sup> <a name="EmployeeId" id="@cdktf/provider-ad.user.UserConfig.property.employeeId"></a>

```csharp
public string EmployeeId { get; set; }
```

- *Type:* string

Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_id User#employee_id}

---

##### `EmployeeNumber`<sup>Optional</sup> <a name="EmployeeNumber" id="@cdktf/provider-ad.user.UserConfig.property.employeeNumber"></a>

```csharp
public string EmployeeNumber { get; set; }
```

- *Type:* string

Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_number User#employee_number}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-ad.user.UserConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

If set to false, the user will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#enabled User#enabled}

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-ad.user.UserConfig.property.fax"></a>

```csharp
public string Fax { get; set; }
```

- *Type:* string

Specifies the user's fax phone number. This parameter sets the Fax property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#fax User#fax}

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktf/provider-ad.user.UserConfig.property.givenName"></a>

```csharp
public string GivenName { get; set; }
```

- *Type:* string

Specifies the user's given name. This parameter sets the GivenName property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#given_name User#given_name}

---

##### `HomeDirectory`<sup>Optional</sup> <a name="HomeDirectory" id="@cdktf/provider-ad.user.UserConfig.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; set; }
```

- *Type:* string

Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_directory User#home_directory}

---

##### `HomeDrive`<sup>Optional</sup> <a name="HomeDrive" id="@cdktf/provider-ad.user.UserConfig.property.homeDrive"></a>

```csharp
public string HomeDrive { get; set; }
```

- *Type:* string

Specifies a drive that is associated with the UNC path defined by the HomeDirectory property.

The drive letter is specified as <DriveLetter>: where <DriveLetter> indicates the letter of the drive to associate. The <DriveLetter> must be a single, uppercase letter and the colon is required. This parameter sets the HomeDrive property of the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_drive User#home_drive}

---

##### `HomePage`<sup>Optional</sup> <a name="HomePage" id="@cdktf/provider-ad.user.UserConfig.property.homePage"></a>

```csharp
public string HomePage { get; set; }
```

- *Type:* string

Specifies the URL of the home page of the object.

This parameter sets the homePage property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_page User#home_page}

---

##### `HomePhone`<sup>Optional</sup> <a name="HomePhone" id="@cdktf/provider-ad.user.UserConfig.property.homePhone"></a>

```csharp
public string HomePhone { get; set; }
```

- *Type:* string

Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_phone User#home_phone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ad.user.UserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialPassword`<sup>Optional</sup> <a name="InitialPassword" id="@cdktf/provider-ad.user.UserConfig.property.initialPassword"></a>

```csharp
public string InitialPassword { get; set; }
```

- *Type:* string

The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initial_password User#initial_password}

---

##### `Initials`<sup>Optional</sup> <a name="Initials" id="@cdktf/provider-ad.user.UserConfig.property.initials"></a>

```csharp
public string Initials { get; set; }
```

- *Type:* string

Specifies the initials that represent part of a user's name. Maximum 6 char.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initials User#initials}

---

##### `MobilePhone`<sup>Optional</sup> <a name="MobilePhone" id="@cdktf/provider-ad.user.UserConfig.property.mobilePhone"></a>

```csharp
public string MobilePhone { get; set; }
```

- *Type:* string

Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `Office`<sup>Optional</sup> <a name="Office" id="@cdktf/provider-ad.user.UserConfig.property.office"></a>

```csharp
public string Office { get; set; }
```

- *Type:* string

Specifies the location of the user's office or place of business.

This parameter sets the Office property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office User#office}

---

##### `OfficePhone`<sup>Optional</sup> <a name="OfficePhone" id="@cdktf/provider-ad.user.UserConfig.property.officePhone"></a>

```csharp
public string OfficePhone { get; set; }
```

- *Type:* string

Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office_phone User#office_phone}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-ad.user.UserConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Specifies the user's organization. This parameter sets the Organization property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#organization User#organization}

---

##### `OtherName`<sup>Optional</sup> <a name="OtherName" id="@cdktf/provider-ad.user.UserConfig.property.otherName"></a>

```csharp
public string OtherName { get; set; }
```

- *Type:* string

Specifies a name in addition to a user's given name and surname, such as the user's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#other_name User#other_name}

---

##### `PasswordNeverExpires`<sup>Optional</sup> <a name="PasswordNeverExpires" id="@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires"></a>

```csharp
public object PasswordNeverExpires { get; set; }
```

- *Type:* object

If set to true, the password for this user will not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#password_never_expires User#password_never_expires}

---

##### `PoBox`<sup>Optional</sup> <a name="PoBox" id="@cdktf/provider-ad.user.UserConfig.property.poBox"></a>

```csharp
public string PoBox { get; set; }
```

- *Type:* string

Specifies the user's post office box number. This parameter sets the POBox property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#po_box User#po_box}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-ad.user.UserConfig.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#postal_code User#postal_code}

---

##### `SmartCardLogonRequired`<sup>Optional</sup> <a name="SmartCardLogonRequired" id="@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired"></a>

```csharp
public object SmartCardLogonRequired { get; set; }
```

- *Type:* object

If set to true, a smart card is required to logon.

This parameter sets the SmartCardLoginRequired property for a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#smart_card_logon_required User#smart_card_logon_required}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-ad.user.UserConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#state User#state}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-ad.user.UserConfig.property.streetAddress"></a>

```csharp
public string StreetAddress { get; set; }
```

- *Type:* string

Specifies the user's street address. This parameter sets the StreetAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#street_address User#street_address}

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="@cdktf/provider-ad.user.UserConfig.property.surname"></a>

```csharp
public string Surname { get; set; }
```

- *Type:* string

Specifies the user's last name or surname. This parameter sets the Surname property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#surname User#surname}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-ad.user.UserConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Specifies the user's title. This parameter sets the Title property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#title User#title}

---

##### `TrustedForDelegation`<sup>Optional</sup> <a name="TrustedForDelegation" id="@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation"></a>

```csharp
public object TrustedForDelegation { get; set; }
```

- *Type:* object

If set to true, the user account is trusted for Kerberos delegation.

A service that runs under an account that is trusted for Kerberos delegation can assume the identity of a client requesting the service. This parameter sets the TrustedForDelegation property of an account object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#trusted_for_delegation User#trusted_for_delegation}

---



