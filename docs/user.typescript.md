# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-ad.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.user.UserConfig">UserConfig</a></code> | *No description.* |

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

- *Type:* <a href="#@cdktf/provider-ad.user.UserConfig">UserConfig</a>

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
| <code><a href="#@cdktf/provider-ad.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |

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

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ad.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktf/provider-ad'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ad.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktf/provider-ad'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

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



